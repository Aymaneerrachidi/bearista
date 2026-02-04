const timelineEvents = [
  {
    year: '2025',
    title: 'The Crash',
    description: 'Crypto dreams fade. Markets tumble. Diamond hands become shaky hands. The wake-up call nobody wanted.',
    side: 'left',
  },
  {
    year: 'Late 2025',
    title: 'The Pivot',
    description: 'Learning the art of coffee. Letting go of charts. Discovering that latte art is more rewarding than candlestick patterns.',
    side: 'right',
  },
  {
    year: '2026',
    title: 'The Brew',
    description: 'Bearista is born. A sanctuary for those who survived the storm. Where every cup tells a story of resilience.',
    side: 'left',
  },
];

const TimelineSection = () => {
  return (
    <section id="story" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-caramel font-medium text-sm uppercase tracking-wider mb-4 block">
            Our Journey
          </span>
          <h2 className="font-comic text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Timeline of Transformation
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From watching red candles to pulling espresso shots. 
            This is how we went from HODL to pour-over.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-caramel via-coffee-medium to-primary -translate-x-1/2 hidden md:block" />

          {/* Timeline Events */}
          <div className="space-y-12 md:space-y-0">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  index !== timelineEvents.length - 1 ? 'md:mb-16' : ''
                }`}
              >
                {/* Left Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    event.side === 'right' ? 'md:order-2 md:pl-12' : 'md:pr-12 md:text-right'
                  }`}
                >
                  <div className={`bg-card rounded-2xl p-8 border border-border shadow-sm ${
                    event.side === 'left' ? 'md:mr-4' : 'md:ml-4'
                  }`}>
                    <span className="font-comic text-caramel text-lg font-bold">
                      {event.year}
                    </span>
                    <h3 className="font-comic text-2xl font-bold text-foreground mt-2 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-caramel border-4 border-background shadow-md" />
                </div>

                {/* Empty Space for opposite side */}
                <div className={`hidden md:block w-1/2 ${event.side === 'right' ? 'md:order-1' : ''}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
