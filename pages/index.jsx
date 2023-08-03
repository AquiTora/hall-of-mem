import { useEffect, useState } from "react";
import { getAllPerson } from "../Service/PageServiсe";
import Header from "../components/Header/Header";
import Cards from "../components/Cards/Cards";

export default function Index (props) {
    return (
        <div>
            <Header />

            <h1>Вводная статья</h1>
        </div>
    )
}