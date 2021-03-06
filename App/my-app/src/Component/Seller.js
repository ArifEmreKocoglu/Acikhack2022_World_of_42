// import { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faSolid, faCloudArrowUp} from '@fortawesome/free-solid-svg-icons'
import { create } from "ipfs-http-client";
// import backgroundImage from '../img/3.jpg'
import '../Styles/Seller.css'

const client = create("https://ipfs.infura.io:5001/api/v0");
function Seller({ images, updateImages }) {

    async function addImages(imgFileUrl) {
        let imgElement = imgFileUrl
            updateImages([...images, imgElement]);
    }

    async function onChange(e) {
        const file = e.target.files[0];
        try {
            console.log(file);

            const added = await client.add(file);
            const url = `https://ipfs.infura.io/ipfs/${added.path}`;
            console.log(url);
            console.log(111);
            addImages(url);
        } catch (error) {
            console.log("ERROR uploading file : ", error);
            alert("error uploading file ", error);
        }
    }

    return (
        <section className="section sectionSeller" id="seller">
            {/* <img src={ backgroundImage } alt="" id="backgroundImage"></img> */}
            <h1 class="sectionTitle"> Satıcı </h1>
            <div className="titleContainer">
                <h2 className="title">Fotoğraf ve</h2>
                <h2 className="title">Takip Numarasını</h2>
                <h2 className="title">Giriniz.</h2>
                <div className="line"></div>
            </div>
            
            <div className="seller_transparan">
                <form>
                    <div className="image">
                        <img src={images[images.length - 1]} alt="" />
                        {/* <FontAwesomeIcon icon="faSolid faCloudArrowUp" className="cloudIcon" /> */}
                    </div>
                    <input className="uploadFoto uploadButton" type="file" onChange={onChange}></input>
                    <input type="textarea" className="trackingNumber" placeholder="lütfen takip numarasını giriniz"></input>
                    <button className="button"> Kaydet </button>
                </form>
            </div>
        </section>
    )
}

export default Seller