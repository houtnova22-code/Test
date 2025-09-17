

export default function Data() {
    const users =[
    { 
    name: 'Nova',
    age: 20,
    city: 'Battambang',
    email: 'hieid@gmail.com'
  },
  { 
    name: 'Sokha',
    age: 22,
    city: 'Phnom Penh',
    email: 'sokha123@gmail.com'
  },
  { 
    name: 'Dara',
    age: 19,
    city: 'Siem Reap',
    email: 'dara789@gmail.com'
  },
  { 
    name: 'Malis',
    age: 21,
    city: 'Kampot',
    email: 'malis456@gmail.com'
  },
  { 
    name: 'Vuthy',
    age: 23,
    city: 'Kandal',
    email: 'vuthy999@gmail.com'
  }]
  return (
    <>
    <div className="w-full bg-blue-900 flex justify-evenly"> 
        <table className="w-full">
            <tr className="text-start flex justify-between"> 
             <th>Name : </th>
            <th>Age :</th>
            <th>City :</th>
            <th> Email :</th>

            </tr>

            {users.map((item)=>(
            
            <tr className=" border-2 border-black text-center" >
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
                <td>{item.email}</td>
            </tr>
            ))}

          
        </table>
    </div>
      
    </>

  )}
  