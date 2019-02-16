$(function(){
  var quantity;
  var price;
  var productName;
  var productPrice;
  var dataName;

  $(document).on('click', '.add' , function() {  //fonction principale qui permet d'ajouter un article
    var subtotal = 0;
    dataName = $(this).attr('data-name');
    productName = $(this).attr('data-name');
    productPrice = $(this).attr('data-price');
    $('#cart-tablebody').append('<tr><td>' + productName + '</td><td class="recup">' + productPrice + '</td><td><input type="Number" name="amount" class="amount" value="1" min="0" /></td><td class="' + dataName + ' subTotal"></td></tr>');
      // Permet d'afficher dans le html le Nom, le prix, le input et le total de la ligne.
  }); // fin de $('.add').click(function()

  $(document).on('click', 'input.amount' , function() { // Permet au clic de modifier les quantité de chaque lignes.
    
    quantity = $(this).val(); // Définition de la quantité.
    price = parseInt($(this).parent().prev().html()); // Définition du prix.
    subtotal = price * quantity; // Calcul du total.
    $(this).parent().next().html(subtotal); // Permet d'injecter le sous total dans le html.
    var total = 0; // Initialisation de la valeur du total à 0.
      $('.subTotal').each(function(index, a){ // Permet de récupérer les valeur des sous totaux de chaques lignes.
         total += parseInt($(this).html()) ; // Permet de calculer le total des sous totaux.
    });
    if( $(this).val() == 0){ // Condition pour effacer l'article quand la quantité est = à 0
      $(this).parent().parent().remove();
  }
  $('.subtotal').html(total); // Affichage du total général.
  });
  $('#removeProduct').click(function(){ // Fonction qui permet de vider l'article au bouton
    $('#cart-tablebody').empty();
    $('.subtotal').empty();
  }); // fin de $('#removeProduct').click(function()
});
