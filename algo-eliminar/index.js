import puppeteer from "puppeteer";

async function conseguirContenido(paginaURL) {
    const buscador = await puppeteer.launch({
        headless: true,
    });

    const pagina = await buscador.newPage();
    await pagina.goto(paginaURL);

    await pagina.evaluate(() => {});

    let contenido = await pagina.content();

    console.log(contenido);

    await buscador.close();
}


async function main(argv) {
    if (argv.length <= 2) {
        console.log("No se pasaron suficientes argumentos");
        return;
    }

    argv = argv.slice(2);
    let pagina = argv[0];

    if (argv.length <= 3) {
        let directorio = argv[1];
        pagina = `file://${directorio}/${pagina}`;
    }

    await conseguirContenido(pagina);
}

main(process.argv);



