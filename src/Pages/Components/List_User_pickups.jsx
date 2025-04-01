import { IconPencil, IconTrash } from '@tabler/icons-react';
import { useEffect, useRef } from 'react';

const List_User_pickups = ({ LivePickUps, locationGetter }) => {
  const data = LivePickUps;
  const rowRefs = useRef([]);
  const observerRef = useRef(null);

  function openMap(e) {
    const item = data.find((pickup) => pickup.id == e.target.getAttribute('datakey'));
    locationGetter(item.pickUpLocation, item);
  }

  // Create IntersectionObserver once on mount
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Observe/unobserve elements when data changes
  useEffect(() => {
    const observer = observerRef.current;
    const currentRowRefs = rowRefs.current;

    currentRowRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRowRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [data]);

  return (
    <div className="w-full bg-zinc-900 rounded-xl">
      <style jsx>{`
        .animate-row {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s ease-out;
        }
      `}</style>
      
      <table className="w-full">
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              onClick={openMap}
              datakey={item.id}
              ref={(el) => (rowRefs.current[index] = el)}
              className="animate-row p-5 flex flex-col h-fit w-[50] rounded-xl border-b hover:bg-green-300"
              style={{
                transitionDelay: `${index * 0.15}s`
              }}
            >
              {/* Rest of the row content remains the same */}
              <td datakey={item.id} className="pl-[1vw] pr-[1vw] pt-[0.5vw]  flex items-center gap-3">
                <span datakey={item.id} className="text-xl font-medium">{item.sellerName}</span>
              </td>
              <td datakey={item.id} className="pl-[1vw] pr-[1vw] pt-[0.5vw] flex item-center gap-3 flex items-baseline">  
                <img datakey={item.id} src="https://res.cloudinary.com/dkgclbg58/image/upload/v1743510765/map_icon_vxyie2.png" width="15" height="15"/>    
                <span datakey={item.id} className="text-sm font-medium">{item.pickUpLocation}</span>
              </td>
              <td datakey={item.id} className="pl-[1vw] pr-[1vw] pt-[0.5vw] flex item-center gap-3 flex items-baseline">  
                <img datakey={item.id} src="https://res.cloudinary.com/dkgclbg58/image/upload/v1743510764/gmail_tlbzsq.png" width="15" height="15"/>    
                <span datakey={item.id} className="text-sm font-medium">{item.sellerEmail}</span>
              </td>
              <td datakey={item.id} className="pl-[1vw] pr-[1vw] pt-[0.5vw] flex item-center gap-3 flex items-baseline">
                <img datakey={item.id} src="https://res.cloudinary.com/dkgclbg58/image/upload/v1743510765/garbage_clfuld.png" width="15" height="15"/>    
                <span datakey={item.id} className="text-sm font-medium">{item.estimatedWeight} kg (expected by user)</span>
              </td>
              <td datakey={item.id} className="pl-[1vw] pr-[1vw] pt-[0.5vw] flex justify-between">
                <button datakey={item.id} className="text-blue-600 hover:underline text-sm">{item.email}</button>
                <button datakey={item.id} className="p-2 text-red-600 hover:text-red-800">
                  {/* <IconTrash size={16} stroke={1.5} /> */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List_User_pickups;