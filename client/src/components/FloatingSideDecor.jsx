import Eid1 from '../assets/images/Eid Al Fitr Eid GIF (1).gif'
import Eid2 from '../assets/images/Eid Al Fitr Eid GIF.gif'
import Eid3 from '../assets/images/Eid Al Fitr Ramadan GIF by Islamic Relief Switzerland.gif'

const dots = [Eid1, Eid2, Eid3]

export default function FloatingSideDecor() {
  return (
    <>
      <div className="hidden lg:block absolute left-0 top-0 h-full w-20 overflow-hidden pointer-events-none">
        <div className="h-full flex flex-col items-center animate-scroll-down gap-5 py-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <img
              key={`left-${i}`}
              src={dots[i % dots.length]}
              alt="Eid decor"
              className="h-16 w-16 rounded-full object-cover shadow-lg shadow-emerald-950/30"
            />
          ))}
        </div>
      </div>
      <div className="hidden lg:block absolute right-0 top-0 h-full w-20 overflow-hidden pointer-events-none">
        <div className="h-full flex flex-col items-center animate-scroll-up gap-5 py-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <img
              key={`right-${i}`}
              src={dots[(i + 1) % dots.length]}
              alt="Eid decor"
              className="h-16 w-16 rounded-full object-cover shadow-lg shadow-emerald-950/30"
            />
          ))}
        </div>
      </div>
    </>
  )
}
