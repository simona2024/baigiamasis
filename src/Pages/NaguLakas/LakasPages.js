import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../components/CardStyle/Card';

const LakasPages = () => {
    const { id } = useParams();
    const [lakas, setlakas] = useState({
        pavadinimas: '',
        gamintojas: '',
        aprasymas: '',
        kaina: ''
    });
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const getLakas = async () => {
            try {
                const res = await fetch(`http://localhost:3000/nagai/${id}`);
                const data = await res.json();
                setlakas(data);
            } catch (error) {
                console.error('Klaida gaunant laką:', error);
            }
        };
        getLakas();
    }, [id]);

    const deleteHandler = async () => {
        try {
            const res = await fetch(`http://localhost:3000/nagai/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                console.log('Lakas sėkmingai ištrintas.');
                window.location.href = '/nagai';
            } else {
                console.error('Įvyko klaida ištrinant laką.');
            }
        } catch (error) {
            console.error('Įvyko klaida:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setlakas(prevLakas => ({
            ...prevLakas,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/nagai/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(lakas)
            });
            if (res.ok) {
                console.log('Lakas sėkmingai atnaujintas.');
                setEditing(false); 
            } else {
                console.error('Įvyko klaida atnaujinant laką.');
            }
        } catch (error) {
            console.error('Įvyko klaida:', error);
        }
    };

    const { pavadinimas, gamintojas, aprasymas, kaina } = lakas;

    return (
        <Card>
            {editing ? (
                <form onSubmit={handleSubmit}>
                    <label>Pavadinimas: </label>
                    <input type="text" name="pavadinimas" value={pavadinimas} onChange={handleChange} /><br />
                    <label>Gamintojas: </label>
                    <input type="text" name="gamintojas" value={gamintojas} onChange={handleChange} /><br />
                    <label>Aprašymas: </label>
                    <textarea name="aprasymas" value={aprasymas} onChange={handleChange} /><br />
                    <label>Kaina: </label>
                    <input type="text" name="kaina" value={kaina} onChange={handleChange} /><br />
                    <button type="submit">Atnaujinti laką</button>
                </form>
            ) : (
                <div className='prekes-card'>
                    <h1 className='prekes-h1'>{pavadinimas}</h1>
                    <span className='prekes-span'>{gamintojas}</span>
                    <p className='prekes-p'>{aprasymas}</p>
                    <span className='price'>{kaina}</span>
                    <button className='prekes-button' onClick={() => setEditing(true)}>Redaguoti</button>
                    <button className='prekes-button' onClick={deleteHandler}>Ištrinti Laką</button>
                </div>
            )}
            
        </Card>
    );
};

export default LakasPages;
