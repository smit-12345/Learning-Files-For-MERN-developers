
function funAdd() {
    var inpval1 = document.getElementById("inp1").value;
    var inpval2 = document.getElementById("inp2").value;


    document.getElementById("card_add").innerHTML = Number(inpval1) + Number(inpval2);

    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-primary alert-dismissible fade show" role="alert">
                            <strong>Messge: Addition completed</strong>
                            <button type="button" class="close btn-danger" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);



}
function funMulti() {
    var inpval1 = document.getElementById("inp1").value;
    var inpval2 = document.getElementById("inp2").value;

    document.getElementById("card_multi").innerHTML = Number(inpval1) * Number(inpval2);

    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-danger alert-dismissible fade-left show" role="alert">
                            <strong>Messge: Multiplication completed</strong>
                            <button type="button" class="close btn-danger" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);

}
function funSub() {
    var inpval1 = document.getElementById("inp1").value;
    var inpval2 = document.getElementById("inp2").value;

    document.getElementById("card_sub").innerHTML = Number(inpval1) - Number(inpval2);

    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Messge: Substraction completed</strong>
                            <button type="button" class="close btn-danger" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);

}
function funDiv() {
    var inpval1 = document.getElementById("inp1").value;
    var inpval2 = document.getElementById("inp2").value;

    document.getElementById("card_div").innerHTML = Number(inpval1) / Number(inpval2);

    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-info alert-dismissible fade show" role="alert">
                            <strong>Messge: Division completed</strong>
                            <button type="button" class="close btn-danger" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);

}