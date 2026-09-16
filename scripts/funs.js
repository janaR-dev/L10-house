function navUpdate(){
    if(window.scrollY > 3){
        $('.nav').addClass('scrolled');
    }else{
        $('.nav').removeClass('scrolled');
    }
}


function renderServices(data) {
    let $container = $('#services .container .row');
    let index = 0
    data.forEach(service => {

        let reduced = redusedDes(service.description, 150);
        let desc = reduced.replace(
            /L10N House/g,
            '<span class="name"><span class="firstColor">L10N</span> <span class="secondColor">House</span></span>'
        );
        let card = `
            <div class="col-md-6 part mb-4 wow  ${index % 2 ? 'animate__backInRight animate__animated' : 'animate__backInLeft animate__animated'} " 
                 data-wow-duration="1.5s" 
                 data-wow-delay="${((index + 1) * 0.2).toFixed(1)}s">
                <div class="item text-center">
                    <img src="./images/images/${service.icon}" alt="${service.icon}">
                    <h5 class="my-3">${service.title}</h5>
                    <p>
                        ${desc}... 
                        <span class="ReadMore" onclick="openServicePopup('${index}')">Read More</span>
                    </p>
                </div>
            </div>
        `;

        $container.append(card);
        index++
    });

}

function renderLanguages(data) {
    let $container = $('.langs-popup .box');
    data.forEach(langs => {
        let langsHtml = '';


        langs.languages.forEach(lang => {
            let langHtml = '';

            langHtml += `<li><i class="far fa-dot-circle"></i>${lang}</li>`;



            langsHtml += `
            <ul type="none">
    ${langHtml}                </ul>
                
            `;
        });

        let item = `
          <div class="continent mb-4">
                <h4 class="mb-3">${langs.continent}</h4>
                ${langsHtml}
            </div>
            
        `;

        $container.append(item);


    })
}

function renderSectors(data) {
    let $container = $('.sectors-popup .body .row');

    data.forEach(sector => {

        let item = `
          <div class="col-lg-3 mb-4">
                <div class="item text-center">
                    <img src="./images/images/sec/${sector.icon}" alt="${sector.icon}" class="mb-3">
                    <p>${sector.name}</p>
                </div>
            </div>
            
        `;

        $container.append(item);


    })
}
function openServicePopup(i) {
    let service = servicesData[i];

    let $container = $('.services-popup .box .body');
    $container.empty();

    let desc = service.description ? service.description.replace(
        /L10N House/g,
        '<span class="name"><span class="firstColor">L10N</span> <span class="secondColor">House</span></span>'
    ) : '';

    let sectionsHtml = '';


    service.sections.forEach(sec => {
        let pointsHtml = '';

        sec.points.forEach(point => {
            pointsHtml += `<li class='secondColor'><span style='color: black'>${point}</span></li>`;
        });


        sectionsHtml += `
                <div class="section">
                    <div class="section-head">
                        <h5 class="mb-3">${sec.title}</h5>
                    </div>
                    <div class="section-body">
                        <ol>
                            ${pointsHtml}
                        </ol>
                    </div>
                </div>
            `;
    });


    let popupContent = `
        
            <h4 class="text-center mb-5 secondColor">${service.title}</h4>
            <div class="row">
                <div class="col-lg-6">
                    <div class="item">
                        <p>${desc}</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="item">
                        <img src="./images/images/${service.img}" alt="${service.title}" class="img-fluid rounded-3">
                    </div>
                </div>
            </div>
            <div class="sections mt-5">
                ${sectionsHtml}
            </div>
        
    `;

    $container.html(popupContent);

    $('.popup[data-name="service"]').fadeIn(500);
}

function closePopup(that) {
    let $popup = $(that).closest('.popup');
    $popup.fadeOut('fast');


}
function openPopup(popupName) {
    $(`.popup[data-name="${popupName}"]`).fadeIn(500);
}
function redusedDes(text, maxLength) {
    if (!text || text.length <= maxLength) return text;
    return text.substring(0, maxLength);
}
