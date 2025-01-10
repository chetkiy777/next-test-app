import GoodMarkup from "@/app/components/GoodMarkup";
import BadMarkup from "@/app/components/BadMarkup";

export const dynamic = 'force-dynamic'; // Указывает, что страница всегда должна генерироваться сервером

export default async function HomePage() {


    // Запрос к сервису геолокации
    const geoResponse = await fetch(`https://ipinfo.io/?token=20a86765720c74`);

    // Получение данных геолокации
    const geoData = await geoResponse.json();
    const country = geoData.country;

    return (
        <main>
            {country && country === "UA" ? <GoodMarkup /> : <BadMarkup /> }
            <div>{country}</div>
        </main>
    );
}