import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export const dynamic = 'force-dynamic'; // Указывает, что страница всегда должна генерироваться сервером

export default async function HomePage() {

    const token = process.env.API_TOKEN;

    // Получение данных геолокации
    const geoResponse = await fetch(`https://ipinfo.io/json?token=${token}`, {
        cache: 'no-store', // Отключаем кеширование для получения актуальных данных
    });
    const geoData = await geoResponse.json();

    return (
        <main>
            <h1>Добро пожаловать!</h1>
            <p>Ваш город: {geoData.city || 'Неизвестно'}</p>
            <p>Ваша страна: {geoData.country || 'Неизвестно'}</p>
        </main>
    );
}