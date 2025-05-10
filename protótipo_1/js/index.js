document.addEventListener('DOMContentLoaded', main);

async function main() {
    const result = await listCharactersByPage();

    renderCharactersList(result.charactersList);
}

function renderCharactersList(Characters) {
    const row = document.getElementById("list-characters");
    row.innerHTML = "";

    for (const character of Characters) {
        const card = `
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-12 col-md-5">
                        <div class="object-fit-fill border rounded h-100">
                            <img src="${character.image}"
                                class="w-100 h-100 rounded" alt="Foto do personagem
                                ${character.name}">
                        </div>
                    </div>
                    <div class="col-12 col-md-7">
                        <div class="card-body fw-bolder">
                            <h5 class="card-title"> ${character.name}</h5>

                            <p class="card-text">
                                <small>
                                    <i id="circle-status" class="bi bi-circle-fill 
                                    text${
                                        mapStatus(character.status).color
                                    }"></i>
                                    <span>${
                                        mapStatus(character.status).text
                                    } - ${mapSpecie(character.species)}</span>
                                </small>
                            </p>


                            <p class="card-text"><small class="text-body-secondary">Última localização conhecida</small><br>
                                <small>Planeta XPTO</small>
                            </p>

                            <p class="card-text"><small class="text-body-secondary">Visto a útima vez em:</small><br>
                                <small>Nome do episódio</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const col = document.createElement('div');
        col.classList.add("col-12","col-md-6");

        col.innerHTML = card;
        row.appendChild(col);
    }

}


function mapStatus(characterStatus) {
    switch(characterStatus) {
        case 'Alive':
            return {
                color: success,
                text: "Vivo"
            };
        case 'Dead':
            return {
                color: "danger",
                text: "Morto",
            };
        default: 
            return {
            color: "secondary",
            text: "Desconhecida",
            };
        
    }
}

function mapSpecie(characterSpecie) {
        switch(characterSpecie) {
        case "Human":
            return "Humano";
        case "Alien":
            return "ET";
        case "Robot":
            return "Robô";
        default: 
            return `Outro (${characterSpecie})`;
     }

}