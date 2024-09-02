import { ChangeEvent, FormEvent, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";

const img =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHERMRBxIWERUXGBcVFRcQGBIXFRkXGhgZGBcXFxUZHSggHxolGxgXITMiJSkrLzouGR8zODMsOigtLisBCgoKDg0OGhAQGyslHyU3LS0tLS0tLS0rLisyLSs3LS0tLS0tLS0tLS03LS0vLS0tLS4tLi0tLS0tNS0tNy0tLf/AABEIAPMA0AMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgMEBQcIAgH/xAA/EAACAQIEAwUFBAgFBQAAAAAAAQIDEQQFEiEGMUEHE1FhcSIygZGhFDNC0RUjYnKCkrHBJENSovAWNFNjc//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIBEBAQACAQQDAQAAAAAAAAAAAAECERIDEyExQVFxYf/aAAwDAQACEQMRAD8A3iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfLH0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU8RXo4aLniJKEVu5TaUV6tlDLMywWbU+9y6aqQvKOqN7aotxkt/BpgXYAAA8znGmm5tJJXbeySXNtmss/wC17C4eejIKKxMU2nVnJwg2ufdqMW5L9p2Xhc1jjcvSWye2zwaXz3tYx1VQ/RrVGWiDqRio1YqU46rd7Kz1RTje0LK7V2+Us4P7R8FnCjTzS1Gq7JS/y5P1/C/XbzLwy1tOUTwAGGgAAAAAAAAAAAAAAAAAAAABqLtT4jeHxcqVWKmqNODownplBVpqc5YidN3UnCEIRgpK2qpJ76TXlHiXNcNW76nXqa4KLTc5tNtptNXsoPf2VZeRm+1OtDHZpidG2hU6V9t3Gld/J1GvgQmvSqxUut4x5eKsvzZ6+nJMXHK+XT/CvFGW8TUY1MDNare3TbWuEuqcedr9eTLvOs8yzIod5m1aNKPTU/albpCC9qT8kmcoxqKD9na0E/jZJvlz5hVHVlDVJe0nvpu9m9k2/Iz2Jv2vOpt2gcfZhxZJ0MBJ0MLutH46tt7ztz5e7ey5tva0eoYbBUaF5SU2/chGT2vzlN7Xle6ty9drYynCvKEa0IScdUozm09HJXTqP2Vs/Ip0K0KOy1TSbTlBbxv/AKF16K78dludscZrwza+ZrQhhZr7PJySS9pc0+q81cucmxTjJPEvTCLjrcXBSab/AMuEnvOye3LxaW5SqN7WSlZWm4bNS67cmlstkuTPEKD7tzrbxck04qTk7ak7Xa383tzJwu/Cb+3U/C+eZRnFGP6GmnGEYrQ9pwSVlqj4bWurp2dmzNHMuQZnHK4qtlL0TjCUoyg4qTtG8k5PnfTunt5bEv4W7ReIcFB1M7X2iEraIz0Qn+1NSjH3XeyTXTaxwy6N9x0mf23WCFZB2m5FnE+7qa8NLf8A7ju1F28JKT+tiarfkcbjZ7bllAARQAAAAAAAAAAAAAAPM3ZAcw5xipYrE4ipN311q0k/J1JOP0svgY6pVjB7q+z+pOcy7L+JcNd4dU8R+5NRm342qWX1I/iOAuLlvLBTS/fw/wDTvD145SONm0dtSrbRe/L4W3282uS8V5lGNGn7Nr2jdq2zfVK75K/kZRcL5+5aPseIv50qij/O1p+NzK0Oz/iWavOlCn5VKkL/AOzUW5/xNI3l+cZjlM3PAS7tcpQSWlr9uDvrXm9+e6JJgcXwrnNnmlFYKq72q4X2aTt+PQ1pjv1kluveKWL4I4hwyb7pT/8AjNavhfS/kRvF4acZpY2MqT5JSjKE0lyjBPZ/H5l8X9ErxfZ1mULTyydPFwtqXdtUqzXlFvRL1UmRzNYYvDONPMqc6c95aZqVOS6R0qXNJLp1bLrI+I8zymb+wztSScnSmm426bP8UpNe0mnd/AneUdoWV5wu5zmCpt8410p0ntd+01eOy/ErLxLvLGa9o11l9WMW51bTsmlqjabeh3jLxWm9/VEhxuW4mlhKWMwtV1IzhGVaFZO9OdrSlFxt+quuVttunKYYjhjhvHpSpUYqLTt3MpRg0+elwkotMzNHD4alT7qslGioOLhUjeCp6bNXXJabky6u5JE+Woac44d97KN5VIRd6ak1FaUpTe/V3tt5skeR9pedZW4xwslVpx3caqk014RtvG3jy35ELqSdbRJRk7xdtErNJznZW9NvgWUJNcjfVmNq47dDZT2uZNibLMqVXDy5NqLqU787JxWq/lpJPguMuGsc0sPjKN3yU5qEn6RnZnLEMTKn7trp3vZX+fh5cj08XPlfY4XpYfDcyrr6nWpVPu5J+FmmVDjyOIle65m8exDPMfmFPEUsdUdSFN0+71tuSc9d46n+H2Ft0uc8unqblamW20gAcmwAAAAAAAAtsbOMVurlw79Cz75p+2axnlnKrSft9dK8/wAi3k9P3Sj+9Nr6RV39C3wuSRwVerXjiq0oVG5dzOSlCLfPS3ul5GI4y4rwnDUE4wdSpL3Iq/pqb6L6+Hiu/wCMMzPXP7yo35QVl85b/Q8zp697ER4L4zrcQOdPFQ7qolqi4p6JLr734kZvFUs1qzX2erpj12X0LpF5VjKDsqbl5pxX9SzxWW0cenHF0IuL562pf7bHnOc3weSU1PM6jSe0dqknKVm+UItpedrbosuGuKsNxFTcsFGVKcfep1VaS8GmtmvNAYLN+zXLcUn9jcqF7O0LODtf8Mr+PSxGMV2aZvQjKOEnTqX2vPXB6f8ASudl1e+/9dn/AG7NO80whFx8d/zLrMs4wOT0u9zepClHleV934Rjzk/JK5rdhppijwrxhlFlllOpF3cpd3Ug4yvZJW1K+y6x6lXH0+PMTRlSx1DGyi3vGFCTjpW93oglJN22u+TN2ZfmGExtONbBS1wlupQ3T/54Hqjm1GrPRSlLV4aWOV+jTnDE5VmMdKqYaq7Rs/1dWMk9Uuatt6FKOS5lU+6w+I+NCq/qonUc62JpL9ZK3W3W3j5L1LDC51SxybwdeNRJ2bpSU180yXO0kc5UOEuJcS7UMDiXfq6NWK+MpRSXxJBgOynirFb4mFLDL/31Y3/lp6n87G4MRnslUVKnTrVJvkkrJ+d/DzLzFLEwp/4dRlVaVlJ+yvHfrbx6v6y7VrnKex7DQd83xbqfs4WCj86k77fwo2XwxkeWZFFUcnpKnFy1S3lKcmlznOTbfh4LpY+ZXgsZzxk+8k+kFaEfTZN+rM/hcOqC8znldNSK4AOLYAAAAAAADzOSgrsx+LxdHwZkj44xfNFl0lm0feIwc+c4+kpaX8mUcTgMoxtvtdKFS3K7X9mSKeGw8/fhF+sUyl+jcB/4af8AJD8jp3GeKOP/AKfyreKoUfOcoJ/V3MTiOMMp7zRRlq8Z6Wqa9JPn8CewwmGp/dwivSMUVVGK5IncXi19iMRlWYL/ABFSnNeDlC39SnSllGD3oKK/cV2/lc2MC9ypxauxHE8oTUcLhq8o9Z91UsvSNrv5FzXwOU52oyzSMpNcu8jOFr2urNJ9EbIBO5V4oZln6DyWn3eHcYxu3pTdrvnstynS4uyyUnHDRqR6OToVoJ/xSjdk3A5nFA83xGR51SnRzCt+rnbVFOUW7NPeXPoY7JsBwjkF3lmq7VnZ16n0gkbNA7hxQWXEFWfs5fh6jXVyhKC+EbXf8RkMFiMVUd6tCfya/sSoE5nFj6GIrpWVJx+DRdQqVnzh9UVgZ2unyN3zPoBFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==";

const ProductManagement = () => {
  const [name, setName] = useState<string>("The First Item");
  const [price, setPrice] = useState<number>(2000);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img);

  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

  const changeImgHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhotoUpdate(reader.result);
      };
    }
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(nameUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
    setPhoto(photoUpdate);
  };
  return (
    <div className="adminContainer">
      <Sidebar />

      <main className="productManagement">
        <section>
          <strong>ID - kajcndj</strong>
          <img src={photo} alt="ProductImg" />
          <p>{name}</p>
          {stock > 0 ? (
            <span className="green">{stock} Available</span>
          ) : (
            <span className="red">Not Available</span>
          )}

          <h3>${price}</h3>
        </section>

        <article>
          <form onSubmit={submitHandler}>
            <h2>Manage</h2>
            <div>
              <label>Name</label>
              <input
                required
                type="text"
                value={nameUpdate}
                placeholder="Name"
                onChange={(e) => setNameUpdate(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                required
                type="number"
                value={priceUpdate}
                placeholder="Price"
                onChange={(e) => setPriceUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Stock</label>
              <input
                required
                type="number"
                value={stockUpdate}
                placeholder="Stock"
                onChange={(e) => setStockUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Photo</label>
              <input type="file" onChange={changeImgHandler} />
            </div>
            {photoUpdate && <img src={photoUpdate} alt="New Img" />}

            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
