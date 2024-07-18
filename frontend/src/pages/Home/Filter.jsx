import { useSearchParams } from "react-router-dom";

const Filter = () => {

  const [params,setParams]=useSearchParams()
  const handleChange=(name,value)=>{
    params.set(name,value)
    setParams(params)
  }

  return <form className="lg:mt-28 flex flex-col gap-4 lg:gap-10">
    <div className="flex flex-col gap-2">
      <label className="font-bold" htmlFor="">Nereye</label>
      <select onChange={(e)=>handleChange("title", e.target.value)} className="border py-1 px-4 rounded-md" type="text">
        <option value="">Seçiniz</option>
        <option value="">İstanbul</option>
        <option value="">Antalya</option>
        <option value="">İzmir</option>
        <option value="">Rize</option>
        <option value="">Ankara</option>
      </select>
    </div>
    <div className="flex flex-col gap-2">
      <label className="font-bold" htmlFor="">Sıralama Ölçütü</label>
      <select onChange={(e)=>handleChange("order", e.target.value)} className="border py-1 px-4 rounded-md" type="text">
        <option value="">Seçiniz</option>
        <option value="price-asc">Fiyat:Düşükten Yükseğe</option>
        <option value="price-dsc">Fiyat:Yüksekten Düşüğe</option>
        <option value="rating-asc">Yıldız:Düşükten Yükseğe</option>
        <option value="rating-dsc">Yıldız:Yüksekten Düşüğe</option>
      </select>
    </div>
    <div className="flex flex-col gap-2">
      <label className="font-bold" htmlFor="">Konaklama Yeri</label>
      <input onChange={(e)=>handleChange("location", e.target.value)} className="border py-1 px-4 rounded-md" type="text" placeholder="ör: Seaside villa">
      </input>
    </div>
    <div className="flex justify-end">
      <button type="reset" onClick={()=>setParams({})} className="bg-blue-500 p-1 px-4 text-white font-bold rounded-md w-fit">Filtreleri Temizle</button>
    </div>
    
  </form>;
};

export default Filter;
