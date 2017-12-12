
{/* <form id="myForm" name="theForm">
        <input type="text" name="user" id="user" value="Arsalan" />
        <input type="text" name="occopation" id="occopation" value="doctor" />
        <input type="number" name="age" id="age" value="27" />
        <input type="text" name="email" id="email" value="johndoe@test.com" />
        <textarea name="message" id="message">Enter Your Message Her</textarea>
        <button type="submit" onClick="getSubmitValue()">Place Order</button>
    </form> */}
function getSubmitValue(params) {
    var formObject = document.theForm;
    var itemnamehere = [];
    if (formObject.length) {
        for (var i = 0; i < formObject.length; i++) {
            if (formObject[i].value !== "") {
                itemnamehere.push(formObject[i].value);
            }
        }
    } else {
        alert("Please check your form input value")
    }
}