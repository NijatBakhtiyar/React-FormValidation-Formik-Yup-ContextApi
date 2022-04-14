import React from "react";
// import BigRhombusIcon from "../constant/icons/bigRhombusIcon";
import PatikaIcon from "../constant/icons/patikaIcon";
// import SmallRhombusIcon from "../constant/icons/smallRhombusIcon";
// import { useAuthContex } from "../context/authContext";
import LoadingIcon from "../constant/icons/loadingIcon";

function PatikaInfo() {
    // const { mode } = useAuthContex();

    return (
        <div className="patika-info">
            <div><PatikaIcon /></div>
            <h1>Yazılım Patikaları</h1>
            <p>Bootcamp`ler teknoloji kariyerine girmek isteyenler için yeni bir eğitim modelidir. Ekibini büyütmek isteyen şirketler bir bootcamp`lere sponsor olurlar. Teknik beceriler kazanmaya başlamış ancak işe girmeye hazır olmayan kişiler bootcamp`lere başvururlar. Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul alırlar. Bootcamp`lerde başarılı olan öğrenciler sponsor şirkette ya da sektörde başka şirketlere işe yerleşirler.</p>
            <div className="icons">
                {/* <SmallRhombusIcon params={mode === "dark" && { color: "#FFBF5E" }} /> */}
                {/* <BigRhombusIcon params={mode === "dark" && { color: "#FFBF5E" }} /> */}
                <LoadingIcon/>
            </div>
        </div>
    );
}


export default PatikaInfo;
