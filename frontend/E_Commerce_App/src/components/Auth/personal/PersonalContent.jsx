
import {  Input } from "antd";
function PersonalContent() {
  return (
    <div className="form-content">
      <form>
      <label>
        <span>Ad:</span>
        <input placeholder="Beyza Nur"  type="text" name="ad" />
      </label>
      <label>
        Soyad:
        <input placeholder="TURAN" type="text" name="soyad"   />
      </label>
      <label>
        Telefon:
        <input placeholder="0532 896 56 47" type="text" name="telefon" />
      </label>
      {/* <label>
        Doğum Tarihi:
        <input type="text" name="dogumTarihi" />
      </label> */}
      
      <label>
        E-Posta Adresi:
        <input placeholder="beyzanurturan48@gmail.com" type="email" name="email"  />
      </label>
      {/* <label>
        Cinsiyet:
        <select name="cinsiyet" >
          <option value="Erkek">Erkek</option>
          <option value="Kadın">Kadın</option>
        </select>
      </label> */}
    </form>
    </div>
  )
}

export default PersonalContent
