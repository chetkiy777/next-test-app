export const dynamic = 'force-dynamic';

export default async function LocationPage({ geo }) {
    const location = geo || { city: 'Неизвестно', country: 'Неизвестно' };

    return (
        <div>
            <p>Ваш город: {location.city}</p>
            <p>Ваша страна: {location.country}</p>
        </div>
    );
}