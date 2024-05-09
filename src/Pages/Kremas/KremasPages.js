import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './KremasPages.css'
import Card from '../../components/CardStyle/Card';

const KremasPages = () => {
    const { id } = useParams();
    const [kremas, setKremas] = useState({});
    const [editing, setEditing] = useState(false);
    const [editedKremas, setEditedKremas] = useState({});

    useEffect(() => {
        const getKremas = async () => {
            try {
                const res = await fetch(`http://localhost:3000/kremai/${id}`);
                const data = await res.json();
                setKremas(data);
                setEditedKremas(data); 
            } catch (error) {
                console.error('Klaida gaunant kremą:', error);
            }
        };
        getKremas();
    }, [id]);

    const deleteHandler = async () => {
        try {
            const res = await fetch(`http://localhost:3000/kremai/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                console.log('Kremas sėkmingai ištrintas.');
                window.location.href = '/kremai';
            } else {
                console.error('Įvyko klaida ištrinant kremą.');
            }
        } catch (error) {
            console.error('Įvyko klaida:', error);
        }
    };

    const handleChange = (e) => {
        setEditedKremas({ ...editedKremas, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/kremai/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedKremas),
            });
            if (res.ok) {
                console.log('Kremas sėkmingai atnaujintas.');
                setEditing(false); 
            } else {
                console.error('Įvyko klaida atnaujinant kremą.');
            }
        } catch (error) {
            console.error('Įvyko klaida:', error);
        }
    };

    const { pavadinimas, gamintojas, aprasymas, kaina } = kremas;

    return (
        <Card>
            {editing ? (
                

                <form onSubmit={handleSubmit}>
                    <label>Pavadinimas: </label>
                    <input type="text" name="pavadinimas" value={editedKremas.pavadinimas} onChange={handleChange} /><br />
                    <label>Gamintojas: </label>
                    <input type="text" name="gamintojas" value={editedKremas.gamintojas} onChange={handleChange} /><br />
                    <label>Aprašymas: </label>
                    <textarea name="aprasymas" value={editedKremas.aprasymas} onChange={handleChange} /><br />
                    <label>Kaina: </label>
                    <input type="text" name="kaina" value={editedKremas.kaina} onChange={handleChange} /><br />
                    <button type="submit">Patvirtinti Redagavimą</button>
                </form>
                
            ) : (
                <div className='prekes-card'>
                    <h1 className='prekes-h1'>{pavadinimas}</h1>
                    <span className='prekes-span'>{gamintojas}</span>
                    <p className='prekes-p'>{aprasymas}</p>
                    <span className='price'>{kaina}</span>
                    <button className='prekes-button' onClick={() => setEditing(true)}>Redaguoti</button>
                    <button className='prekes-button' onClick={deleteHandler}>Ištrinti Kremą</button>
                </div>
            )}
            
        </Card>
    );
};

export default KremasPages;
