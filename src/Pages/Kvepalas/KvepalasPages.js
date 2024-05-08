import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const KvepalasPages = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [kvepalas, setKvepalas] = useState({});
    const [editedKvepalas, setEditedKvepalas] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const getKvepalas = async () => {
            try {
                const res = await fetch(`http://localhost:3000/kvepalai/${id}`);
                const data = await res.json();
                setKvepalas(data);
                setEditedKvepalas(data);
            } catch (error) {
                console.error('Klaida gaunant kvepalą:', error);
            }
        };
        getKvepalas();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedKvepalas({ ...editedKvepalas, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/kvepalai/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedKvepalas),
            });
            if (res.ok) {
                console.log('Kvepalas sėkmingai atnaujintas.');
                const updatedKvepalas = await res.json();
                setKvepalas(updatedKvepalas);
                setIsEditing(false);
            } else {
                console.error('Įvyko klaida atnaujinant kvepalą.');
            }
        } catch (error) {
            console.error('Įvyko klaida:', error);
        }
    };

    const handleDelete = async () => {
        try {
            const res = await fetch(`http://localhost:3000/kvepalai/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                console.log('Kvepalas sėkmingai ištrintas.');
                navigate('/kvepalai');
            } else {
                console.error('Įvyko klaida ištrinant kvepalą.');
            }
        } catch (error) {
            console.error('Įvyko klaida:', error);
        }
    };

    return (
        <div>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="pavadinimas">Pavadinimas</label>
                        <input type="text" id="pavadinimas" name="pavadinimas" value={editedKvepalas.pavadinimas} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="gamintojas">Gamintojas</label>
                        <input type="text" id="gamintojas" name="gamintojas" value={editedKvepalas.gamintojas} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="aprasymas">Aprašymas</label>
                        <textarea id="aprasymas" name="aprasymas" value={editedKvepalas.aprasymas} onChange={handleInputChange}></textarea>
                    </div>
                    <div>
                        <label htmlFor="kaina">Kaina</label>
                        <input type="text" id="kaina" name="kaina" value={editedKvepalas.kaina} onChange={handleInputChange} />
                    </div>
                    <button type="submit">Išsaugoti pakeitimus</button>
                </form>
            ) : (
                <div className='prekes-card'>
                    <h1 className='prekes-h1'>{kvepalas.pavadinimas}</h1>
                    <span className='prekes-span'>{kvepalas.gamintojas}</span>
                    <p className='prekes-p'>{kvepalas.aprasymas}</p>
                    <span className='price'>{kvepalas.kaina}</span>
                    <button className='prekes-button' onClick={() => setIsEditing(true)}>Redaguoti Kvepalą</button>
                    <button className='prekes-button' onClick={handleDelete}>Ištrinti Kvepalą</button>
                </div>
            )}
        </div>
    );
};

export default KvepalasPages;
