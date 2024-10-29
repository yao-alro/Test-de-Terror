const app = Vue.createApp({
    data() {
        return {
            titulo: 'Test de Personajes de Terror',
            subtitulo: 'Instrucciones: Responde cada pregunta eligiendo la opción que mejor te describa. Anota los puntos de cada opción y al final suma tu total para ver qué personaje eres.',
            nombre: '',
            preguntas: [
                {
                    texto: '1. ¿Cómo reaccionas cuando te desafían o subestiman?',
                    opciones: [
                        { texto: 'Te enojas fácilmente y actúas de inmediato', puntos: 4 },
                        { texto: 'Te divierte, y usas tu ingenio para sorprender', puntos: 3 },
                        { texto: 'Te lo tomas en serio y planeas tu venganza', puntos: 5 },
                        { texto: 'Ignoras la provocación y actúas como si nada', puntos: 1 }
                    ]
                },
                {
                    texto: '2. ¿Qué disfrutas más al asustar a alguien?',
                    opciones: [
                        { texto: 'Ver el miedo en sus ojos', puntos: 4 },
                        { texto: 'Hacer que duden de lo que está pasando', puntos: 3 },
                        { texto: 'Hacer que corran y griten', puntos: 2 },
                        { texto: 'Ver cómo todo se vuelve un caos', puntos: 5 }
                    ]
                },
                {
                    texto: '3. ¿Cómo es tu humor en general?',
                    opciones: [
                        { texto: 'Oscuro y retorcido', puntos: 5 },
                        { texto: 'Juguetón y un poco sádico', puntos: 3 },
                        { texto: 'Burlón y sarcástico', puntos: 4 },
                        { texto: 'No tienes mucho sentido del humor', puntos: 1 }
                    ]
                },
                { 
                    texto: "4. ¿Qué tan importante es para ti tener el control de la situación?", 
                    opciones: [
                        { texto: "A) Muy importante, no dejas nada al azar", puntos:4 },
                        { texto: "B) No tanto, confías en tus instintos ", puntos:2 },
                        { texto: "C) Te gusta el control, pero te adaptas ", puntos:5 },
                        { texto: "D) Prefieres dejar que todo se desarrolle naturalmente", puntos:1 }
                    ]
                },
                { 
                    texto: "5. ¿Qué te motiva principalmente?", 
                    opciones: [
                        { texto: "A) La venganza", puntos:5 },
                        { texto: "B) El caos y el miedo", puntos:4 },
                        { texto: "C) La diversión y el juego", puntos:3 },
                        { texto: "D) La curiosidad", puntos:1 }
                    ]
                },
                { 
                    texto: "6. ¿Cómo prefieres enfrentar a tus “víctimas”?", 
                    opciones: [
                        { texto: "A) Con una trampa bien planeada", puntos:5 },
                        { texto: "B) De manera impredecible y caótica", puntos:4 },
                        { texto: "C) Apareciendo en el momento justo", puntos:2 },
                        { texto: "D) Siguiéndoles de cerca hasta el final", puntos:3 }
                    ]
                },
                { 
                    texto: "7. ¿Qué frase te representa mejor?", 
                    opciones: [
                        { texto: "A) “La paciencia es clave en la venganza”", puntos:5 },
                        { texto: "B) “El caos es el mejor aliado”", puntos:4 },
                        { texto: "C) “Lo inesperado siempre es más divertido”", puntos:3 },
                        { texto: "D) “La curiosidad mató al gato”", puntos:1 }
                    ]
                },
                { 
                    texto: "8. ¿Qué tipo de lugar prefieres?", 
                    opciones: [
                        { texto: "A) Un lugar oscuro y abandonado", puntos:4 },
                        { texto: "B) Una casa normal que oculta horrores", puntos:3 },
                        { texto: "C) Un espacio confinado lleno de trampas", puntos:5 },
                        { texto: "D) Un bosque denso e impredecible", puntos:2 }
                    ]
                },
                { 
                    texto: "9. ¿Qué opinas de trabajar en equipo?", 
                    opciones: [
                        { texto: "A) Prefieres trabajar solo", puntos:4 },
                        { texto: "B) Sólo en casos especiales", puntos:3 },
                        { texto: "C) No tienes problema con hacer alianzas", puntos:2 },
                        { texto: "D) Siempre estás solo y no confías en nadie", puntos:5 }
                    ]
                },
                { 
                    texto: "10. ¿Qué harías si te encontraras con alguien como tú?", 
                    opciones: [
                        { texto: "A) Te aliarías para el caos", puntos:3 },
                        { texto: "B) Sería un reto interesante", puntos:4 },
                        { texto: "C) Buscarías dominarlo o manipularlo", puntos:5 },
                        { texto: "D) Evitarías el conflicto ", puntos:1 }
                    ]
                }
            ],
            respuestas: Array(10),
            resultado: false,
            mensajeResultado: ''
        }
    },
    methods: {
        calcularResultado() {
            let totalPuntos = 0;
            for (let puntos of this.respuestas) {
            if (puntos) {
                totalPuntos += puntos;
            }
        }
            let personaje = '';

            if (totalPuntos <= 15) {
                personaje = 'Momo';
                this.imagenPersonaje = 'imagenes/momo.jpg';
            } 
            else if (totalPuntos <= 20) {
                personaje = 'Wrong Turn';
                this.imagenPersonaje = 'imagenes/Wrong Turn.jpg';
            } 
            else if (totalPuntos <= 25) {
                personaje = 'Scream';
                this.imagenPersonaje = 'imagenes/Scream.jpg';
            } 
            else if (totalPuntos <= 30) {
                personaje = 'Annabelle';
                this.imagenPersonaje = 'imagenes/Annabelle.jpg';
            } 
            else if (totalPuntos <= 35) {
                personaje = 'Billy (Saw)';
                this.imagenPersonaje = 'imagenes/Billy (Saw).jpg';
            } 
            else if (totalPuntos <= 40) {
                personaje = 'Guasón';
                this.imagenPersonaje = 'imagenes/Guasón.jpg';
            } 
            else {
                personaje = 'Novia de Chucky';
                this.imagenPersonaje = 'imagenes/Novia de Chucky.jpg';
            }

            this.mensajeResultado = `${this.nombre}, eres ${personaje}!`;
            this.resultado = true;
        }
    }
});

app.mount('#app');



