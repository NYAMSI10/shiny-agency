import React from 'react';
import DefaultPicture from '../assets/logo192.png'
import Card from "../components/Card";

const  freelancesProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },



]
const Freelances = () => {
    return (
        <>
            <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
            {
                freelancesProfiles.map((profil,index)=>(

                    <Card

                        key={`${profil.name}-${index}`}
                        label = {profil.jobTitle}
                        picture={profil.picture}
                        title={profil.name}
                    />



                ))




            }
        </>
    );
};

export default Freelances;