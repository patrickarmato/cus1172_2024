

document.addEventListener('DOMContentLoaded', () => {
    
    widget_html = render_view("#quiz_selection");

    document.querySelector("#app_widget").innerHTML = widget_html;

    create_user_view(1)

    document.querySelector("#quiz1").addEventListener('click', start);
    

})

async function start() {
    widget_html = render_view("#question");
    document.querySelector("#app_widget").innerHTML = widget_html;
    const reponse = await fetch('');
    const data = await response.json();

    const quizID = document.getElementById('quizID').value;
}

const create_user_view = async (user_idx) => {

    const data = await fetch("https://")
    const model = await data.json
    const html_element = render_widget(model, '#user_view')
    document.querySelector('#app_widget').innerHTML = html_element;

}

const render_view = (view, model) => {

    template_source = document.querySelector(view).innerHTML

    var template = Handlebars.compile(template_source);

    /*var model = {
        question : 'How are you?'
    }*/

    console.log(model)

    var html_widget_element = template(model)
    console.log(html_widget_element)
    return html_widget_element
}