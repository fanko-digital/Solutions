import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [total]);

  const handlePrev = () => {
    resetTimeout();
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    resetTimeout();
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handleDot = (idx: number) => {
    resetTimeout();
    setCurrentIndex(idx);
  };

  return (
    <div id="tsec" style={{ position: 'relative', zIndex: 1, display: 'block' }}>
      <section id="testimonials">
        <div className="shdr reveal-on-scroll">
          <div className="stag">CLIENT LOVE</div>
          <h2 className="stitle">What Our Clients Say</h2>
          <p className="sdesc">
            Real feedback from real businesses we have helped grow across Kanyakumari and Tamil Nadu.
          </p>
        </div>

        <div className="tw reveal-on-scroll reveal-scale">
          <div
            className="ttrack"
            id="ttrack"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {TESTIMONIALS.map((t) => (
              <div className="tslide" key={t.id}>
                <div className="tcard">
                  <div className="tstars">★★★★★</div>
                  <p className="tq">"{t.quote}"</p>
                  <div className="tau">
                    <div className="tav">
                      <img src={t.logo} alt={t.company} />
                    </div>
                    <div>
                      <div className="tn">{t.name}</div>
                      <div className="tr">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="tarr">
            <button
              className="ta"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              &#8249;
            </button>
            <button
              className="ta"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              &#8250;
            </button>
          </div>

          <div className="tnav" id="tdots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`tdot ${i === currentIndex ? 'active' : ''}`}
                onClick={() => handleDot(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{ border: 'none', padding: 0 }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
