import React from "react";
import BigRhomb from "../constant/icons/bigRhomb";
import PatikaIcon from "../constant/icons/patikaIcon";
import SmallRhomb from "../constant/icons/smallRhomb";
import { useAuthContex } from "../context/authContext";

function PatikaInfo() {
    const { mode } = useAuthContex();

    return (
        <div className="patika-info">
            <div><PatikaIcon /></div>
            <h1>Yazılım Patikaları</h1>
            <p>Bootcamp`ler teknoloji kariyerine girmek isteyenler için yeni bir eğitim modelidir. Ekibini büyütmek isteyen şirketler bir bootcamp`lere sponsor olurlar. Teknik beceriler kazanmaya başlamış ancak işe girmeye hazır olmayan kişiler bootcamp`lere başvururlar. Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul alırlar. Bootcamp`lerde başarılı olan öğrenciler sponsor şirkette ya da sektörde başka şirketlere işe yerleşirler.</p>
            <div className="icons">
                <SmallRhomb params={mode === "dark" && { color: "#FFBF5E" }} />
                <BigRhomb params={mode === "dark" && { color: "#FFBF5E" }} />
            </div>
        </div>
    );
}

export default PatikaInfo;
