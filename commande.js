function calculerMontant() {
    // Obtenez les éléments du formulaire
    var item = document.getElementById("Item").value;
    var quantity = parseInt(document.getElementById("quantity").value);

    // Définissez les prix pour les différents éléments du menu 
    var prixMenu = {
        "pizza thon": 9000,
        "pizza escalope": 10000,
        "pizza chawarma": 10000,
        "sandwich thon": 4500,
        "sandwich escalope": 5000,
        "sandwich chawarma": 5000,
        "sandwich special": 7000,
        "libanais thon": 5000,
        "libanais escalope": 5500,
        "libanais chawarma": 5500,
        "libanais special": 8000,
    };

    // Vérifiez si l'élément sélectionné est présent dans le menu 
    if (prixMenu.hasOwnProperty(item)) {
        // Calculez le montant total en fonction de la quantité, du supplément et du prix de l'élément
        var montantTotal = (prixMenu[item] ) * quantity;
        // Affichez le montant total
        alert("Total Order Amount : " + montantTotal);
    } else {
        alert("Your Item is not in our menu !");
    }
}
