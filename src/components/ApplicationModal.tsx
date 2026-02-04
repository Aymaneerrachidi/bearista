import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CheckCircle, Send, Coffee } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

const professions = [
  'Crypto Trader',
  'NFT Artist',
  'DeFi Degen',
  'DAO Contributor',
  'Blockchain Developer',
  'Influencer (Finance)',
  'Diamond Hands Holder',
  'Former Billionaire (on paper)',
  'Web3 Evangelist',
  'Just Vibing',
  'Other',
];

const coffeeOrders = [
  'Black Coffee (I like pain)',
  'Oat Milk Latte (I have feelings)',
  'Espresso (Fast and intense)',
  'Iced Americano (Cool under pressure)',
  'Matcha (I\'ve evolved)',
  'Whatever\'s cheapest (Portfolio reasons)',
];

const ApplicationModal = ({ isOpen, onClose, jobTitle }: ApplicationModalProps) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profession: '',
    biggestLoss: '',
    coffeeOrder: '',
    canWorkBearMarkets: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'We need to call you something (besides "anon")';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'How else will we ghost you professionally?';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'That doesn\'t look like an email (we know, we\'ve seen worse)';
    }

    if (!formData.profession) {
      newErrors.profession = 'Select your previous life';
    }

    if (!formData.coffeeOrder) {
      newErrors.coffeeOrder = 'This is a coffee shop, friend';
    }

    if (!formData.canWorkBearMarkets) {
      newErrors.canWorkBearMarkets = 'We need to know your coping status';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStep('success');
    }
  };

  const handleClose = () => {
    setStep('form');
    setFormData({
      name: '',
      email: '',
      profession: '',
      biggestLoss: '',
      coffeeOrder: '',
      canWorkBearMarkets: '',
    });
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        {step === 'form' ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-comic text-2xl">
                Apply for {jobTitle}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                No whitepaper required. No tokenomics quiz. Just vibes and coffee.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Not your wallet address"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={cn(errors.name && 'border-destructive')}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="definitely.not@scam.xyz"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={cn(errors.email && 'border-destructive')}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              {/* Previous Profession */}
              <div className="space-y-2">
                <Label>Previous Profession</Label>
                <Select
                  value={formData.profession}
                  onValueChange={(value) => setFormData({ ...formData, profession: value })}
                >
                  <SelectTrigger className={cn(errors.profession && 'border-destructive')}>
                    <SelectValue placeholder="What were you before the crash?" />
                  </SelectTrigger>
                  <SelectContent>
                    {professions.map((profession) => (
                      <SelectItem key={profession} value={profession}>
                        {profession}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.profession && (
                  <p className="text-sm text-destructive">{errors.profession}</p>
                )}
              </div>

              {/* Biggest Loss */}
              <div className="space-y-2">
                <Label htmlFor="loss">
                  Biggest Loss <span className="text-muted-foreground">(optional, therapeutic)</span>
                </Label>
                <Input
                  id="loss"
                  placeholder="We don't judge. We've been there."
                  value={formData.biggestLoss}
                  onChange={(e) => setFormData({ ...formData, biggestLoss: e.target.value })}
                />
              </div>

              {/* Coffee Order */}
              <div className="space-y-2">
                <Label>Favorite Coffee Order</Label>
                <Select
                  value={formData.coffeeOrder}
                  onValueChange={(value) => setFormData({ ...formData, coffeeOrder: value })}
                >
                  <SelectTrigger className={cn(errors.coffeeOrder && 'border-destructive')}>
                    <SelectValue placeholder="What fuels your recovery?" />
                  </SelectTrigger>
                  <SelectContent>
                    {coffeeOrders.map((order) => (
                      <SelectItem key={order} value={order}>
                        {order}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.coffeeOrder && (
                  <p className="text-sm text-destructive">{errors.coffeeOrder}</p>
                )}
              </div>

              {/* Can Work Bear Markets */}
              <div className="space-y-3">
                <Label>Can you work during extended bear markets?</Label>
                <RadioGroup
                  value={formData.canWorkBearMarkets}
                  onValueChange={(value) => setFormData({ ...formData, canWorkBearMarkets: value })}
                  className="flex flex-col gap-3"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="font-normal cursor-pointer">
                      Yes – I've accepted reality
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="coping" id="coping" />
                    <Label htmlFor="coping" className="font-normal cursor-pointer">
                      Still Coping – but I'm trying
                    </Label>
                  </div>
                </RadioGroup>
                {errors.canWorkBearMarkets && (
                  <p className="text-sm text-destructive">{errors.canWorkBearMarkets}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="cta" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Submit Application
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-caramel/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-caramel" />
            </div>

            <h2 className="font-comic text-2xl font-bold text-foreground mb-2">
              Application Received!
            </h2>
            
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
              Just kidding – this is a meme website. But we appreciate your commitment to the bit.
            </p>

            <div className="bg-secondary/50 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-center gap-2 text-foreground">
                <Coffee className="w-5 h-5 text-caramel" />
                <span className="font-comic">You'd make a great Bearista, though.</span>
              </div>
            </div>

            <Button variant="outline" onClick={handleClose}>
              Close & Keep Coping
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
