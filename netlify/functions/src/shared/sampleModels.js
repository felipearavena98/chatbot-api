function SampleText(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
            "preview_url": false,
            "body": text
        }
    });
    return data;
}


function SampleImage(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "image",
        "image": {
            "link": "https://file-examples.com/storage/fe7d3a0d44631509da1f416/2017/10/file_example_PNG_500kB.png"
        }
    });
    return data;
}

function SampleAudio(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "audio",
        "audio": {
            "link": "https://file-examples.com/storage/fe7d3a0d44631509da1f416/2017/11/file_example_MP3_700KB.mp3"
        }
    });
    return data;
}

function SampleVideo(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "video",
        "video": {
            "link": "https://file-examples.com/storage/fe7d3a0d44631509da1f416/2017/04/file_example_MP4_480_1_5MG.mp4"
        }
    });
    return data;
}

function SampleDocument(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "document",
        "document": {
            "link": "https://iscendia.org/document/sample.pdf"
        }
    });
    return data;
}


function SampleButtons(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "¿Confirmas tu registro?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "Sí"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": "No"
                        }
                    }
                ]
            }
        }
    });
    return data;
}


function SampleList(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "Tengo estas opciones"
            },
            "footer": {
                "text": "Selecciona una de las opciones para poder atenderte"
            },
            "action": {
                    "button": "Ver opciones",
                    "sections": [
                        {
                            "title": "Compra y vende productos",
                            "rows": [
                                {
                                    "id": "main-comprar",
                                    "title": "Comprar",
                                    "description": "Comprar los mejores productos para tu hogar"
                                },
                                {
                                    "id": "main-vender",
                                    "title": "Vender",
                                    "description": "Vende tus productos"
                                },
                                {
                                    "title": "Centro de atención",
                                    "rows": [
                                        {
                                            "id": "main-agencia",
                                            "title": "Agencia",
                                            "description": "Puedes visitar nuestra agencia."
                                        },
                                        {
                                            "id": "main-contacto",
                                            "title": "Centro de contacto",
                                            "description": "Te atenderá uno de nuestros agentes."
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
            }
        }
    });
    return data;
}

function SampleLocation(number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "location",
        "location": {
            "latitude": "-38.433333333333",
            "longitude": "-71.883333333333",
            "name": "Curacautín",
            "address": "Avenida Gregorio Urrutia 580" 
        }
    });
    return data;
}

module.exports = {
    SampleText,
    SampleImage,
    SampleAudio,
    SampleVideo,
    SampleDocument,
    SampleButtons,
    SampleList,
    SampleLocation
}