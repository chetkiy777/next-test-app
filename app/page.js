import GoodMarkup from "@/app/components/GoodMarkup";
import BadMarkup from "@/app/components/BadMarkup";


export const dynamic = 'force-dynamic'; // Указывает, что страница всегда должна генерироваться сервером

export default async function HomePage() {

    // const token = process.env.API_TOKEN;

    // Получение данных геолокации
    const geoResponse = await fetch(`https://ipinfo.io/json?token=20a86765720c74`, {
        cache: 'no-store', // Отключаем кеширование для получения актуальных данных
    });
    const geoData = await geoResponse.json();
    const country = geoData.country;

    return (
        <main>
            {country && country === "PL" ? <GoodMarkup /> : <BadMarkup /> }
        </main>
    );
}