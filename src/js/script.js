oxo.inputs.listenKeyOnce('enter', function() {    //commande pour passer du screen "home" au screen "game"  
  oxo.screens.loadScreen('game', game);           //en meme temps que le screen "game" la commande active la fonction 'game' qui active tout lescript pour la page "game"        
});                                                 

var winner;   //to memorize who win

function game(){    
  var board = document.getElementById('game__board');
  var sign = document.getElementById('sign');
    
  // create board
  var b = jsboard.board({attach:"game__board", size:"11x13"});
  b.cell("each").style({width:"73px", height:"66px"});

  // Couleur tableau 
  b.cell("each").style({ 
      background: "transparent",
  });

  // setup pieces

  var piece_gb = jsboard.piece({text:"gb", textIndent:"-9999px", width:"70px", height:"65px", margin:"0 auto" });
  var piece_fb = jsboard.piece({text:"fb", textIndent:"-9999px", width:"70px", height:"65px", margin:"0 auto" });
  var piece_lb = jsboard.piece({text:"lb", textIndent:"-9999px", width:"70px", height:"65px", margin:"0 auto" });
  var piece_cb = jsboard.piece({text:"cb", textIndent:"-9999px", width:"70px", height:"65px", margin:"0 auto" });
  var piece_gr = jsboard.piece({text:"gr", textIndent:"-9999px", width:"70px", height:"65px", margin:"0 auto" });
  var piece_fr = jsboard.piece({text:"fr", textIndent:"-9999px", width:"70px", height:"65px", margin:"0 auto" });
  var piece_lr = jsboard.piece({text:"lr", textIndent:"-9999px", width:"70px", height:"65px", margin:"0 auto" });
  var piece_cr = jsboard.piece({text:"cr", textIndent:"-9999px", width:"70px", height:"65px", margin:"0 auto" });

  // utiliser les pièces dans le tableau 
  var bluePieces = [
    piece_gb.clone(), 
    piece_fb.clone(), 
    piece_fb.clone(),
    piece_fb.clone(),
    piece_fb.clone(),
    piece_lb.clone(), 
    piece_lb.clone(),
    piece_lb.clone(),
    piece_lb.clone(),
    piece_cb.clone(), 
    piece_cb.clone(), 
  ];
  var redPieces = [
    piece_gr.clone(),
    piece_fr.clone(),
    piece_fr.clone(),
    piece_fr.clone(),
    piece_fr.clone(),
    piece_lr.clone(),
    piece_lr.clone(),
    piece_lr.clone(),
    piece_lr.clone(),
    piece_cr.clone(),
    piece_cr.clone(),
  ];


  // placer les pièces sur le tableau

  // place bluepiece table
  b.cell([10,6]).place(bluePieces[0]);
  b.cell([10,9]).place(bluePieces[1]);
  b.cell([10,7]).place(bluePieces[2]);
  b.cell([10,5]).place(bluePieces[3]);
  b.cell([10,3]).place(bluePieces[4]);
  b.cell([9,4]).place(bluePieces[5]);
  b.cell([9,5]).place(bluePieces[6]);
  b.cell([9,7]).place(bluePieces[7]);
  b.cell([9,8]).place(bluePieces[8]);
  b.cell([10,1]).place(bluePieces[9]);
  b.cell([10,11]).place(bluePieces[10]);


  //classe pour conner l'image du jeton avec les probles de compatibilité des librairies
  bluePieces[0].classList.add('hey0');
  bluePieces[1].classList.add('hey1');
  bluePieces[2].classList.add('hey2');
  bluePieces[3].classList.add('hey3');
  bluePieces[4].classList.add('hey4');
  bluePieces[5].classList.add('hey5');
  bluePieces[6].classList.add('hey6');
  bluePieces[7].classList.add('hey7');
  bluePieces[8].classList.add('hey8');
  bluePieces[9].classList.add('hey9');
  bluePieces[10].classList.add('hey10');

  redPieces[0].classList.add('heyy0');
  redPieces[1].classList.add('heyy1');
  redPieces[2].classList.add('heyy2');
  redPieces[3].classList.add('heyy3');
  redPieces[4].classList.add('heyy4');
  redPieces[5].classList.add('heyy5');
  redPieces[6].classList.add('heyy6');
  redPieces[7].classList.add('heyy7');
  redPieces[8].classList.add('heyy8');
  redPieces[9].classList.add('heyy9');
  redPieces[10].classList.add('heyy10');

  // place redpiece table
  b.cell([0,6]).place(redPieces[0]);
  b.cell([0,9]).place(redPieces[1]);
  b.cell([0,7]).place(redPieces[2]);
  b.cell([0,5]).place(redPieces[3]);
  b.cell([0,3]).place(redPieces[4]);
  b.cell([1,4]).place(redPieces[5]);
  b.cell([1,5]).place(redPieces[6]);
  b.cell([1,7]).place(redPieces[7]);
  b.cell([1,8]).place(redPieces[8]);
  b.cell([0,1]).place(redPieces[9]);
  b.cell([0,11]).place(redPieces[10]);


  for (var i=0; i<bluePieces.length; i++){
    bluePieces[i].addEventListener("click", function() { if (board.dataset.player === "2") {
      showMoves(this); };
    });
  };

  for (var i=0; i<redPieces.length; i++){
    redPieces[i].addEventListener("click", function() { if (board.dataset.player === "1") {
      showMoves(this); };
    });
  }

  function showMoves(piece) {
    resetBoard();

    var token;    //var to memorize the token selectionned with the correct amount of movement points
    var loc = b.cell(piece.parentNode).where();
    var newLocs = [];
    var thisPiece = b.cell(piece.parentNode).get();

    if ((thisPiece=="cb" || thisPiece=="cr") && board.dataset.mvmt == 0 ) {
      token = 'cav';
      newLocs.push(
        [loc[0]-1,loc[1]],[loc[0]-3,loc[1]],[loc[0]-2,loc[1]],[loc[0]-4,loc[1]],
        [loc[0],loc[1]-1],[loc[0],loc[1]-3],[loc[0],loc[1]-2],[loc[0],loc[1]-4],
        [loc[0]+1,loc[1]],[loc[0]+3,loc[1]],[loc[0]+2,loc[1]],[loc[0]+4,loc[1]],
        [loc[0],loc[1]+1],[loc[0],loc[1]+3],[loc[0],loc[1]+2],[loc[0],loc[1]+4],
      );
    }

    if ((thisPiece=="cb" || thisPiece=="cr") && board.dataset.mvmt == 1 ) {
      token = 'cav';
      newLocs.push(
        [loc[0]-1,loc[1]],[loc[0]-3,loc[1]],[loc[0]-2,loc[1]],
        [loc[0],loc[1]-1],[loc[0],loc[1]-3],[loc[0],loc[1]-2],
        [loc[0]+1,loc[1]],[loc[0]+3,loc[1]],[loc[0]+2,loc[1]],
        [loc[0],loc[1]+1],[loc[0],loc[1]+3],[loc[0],loc[1]+2]
      );
    }

    if ((thisPiece=="cb" || thisPiece=="cr") && board.dataset.mvmt == 3 ) {
      token = 'cav';
      newLocs.push(
        [loc[0]-1,loc[1]],
        [loc[0],loc[1]-1],
        [loc[0]+1,loc[1]],
        [loc[0],loc[1]+1]
      );
    }

    if ((thisPiece=="cb" || thisPiece=="cr") && board.dataset.mvmt == 2) {
      token = 'cav';
      newLocs.push(
        [loc[0]-1,loc[1]],[loc[0]-2,loc[1]],
        [loc[0],loc[1]-1],[loc[0],loc[1]-2],
        [loc[0]+1,loc[1]],[loc[0]+2,loc[1]],
        [loc[0],loc[1]+1],[loc[0],loc[1]+2],
      );
    }
    

    if (thisPiece=="gb" || thisPiece=="gr") {
      token = 'foot';
      newLocs.push(
        [loc[0]-1,loc[1]],
        [loc[0],loc[1]-1],
        [loc[0]+1,loc[1]],
        [loc[0],loc[1]+1] 
      );
    }

    if ((thisPiece=="fb" || thisPiece=="lb" || thisPiece=="fr" || thisPiece=="lr") && board.dataset.mvmt >= 2) {  //to reduce range after 1 mvmnt
      token = 'foot';
      newLocs.push(
        [loc[0]-1,loc[1]],
        [loc[0],loc[1]-1],
        [loc[0]+1,loc[1]],
        [loc[0],loc[1]+1]
      ); 
    }

    if ((thisPiece=="fb" || thisPiece=="lb" || thisPiece=="fr" || thisPiece=="lr") && board.dataset.mvmt <= 1) {
      token = 'foot';
      newLocs.push(
        [loc[0]-1,loc[1]],[loc[0]-2,loc[1]], 
        [loc[0],loc[1]-1],[loc[0],loc[1]-2], 
        [loc[0]+1,loc[1]],[loc[0]+2,loc[1]], 
        [loc[0],loc[1]+1],[loc[0],loc[1]+2]
      ); 
    }

    // enleve les déplacements impossible et permet de manger les jetons ennemis

    if (board.dataset.player === "2") {
              
      (function removeIllegalMoves(arr) {
          var fixedLocs = [];
          for (var i=0; i<arr.length; i++)    
          if (b.cell(arr[i]).get() == null || b.cell(arr[i]).get().slice(-1) == 'r') 
          fixedLocs.push(arr[i]); 
          newLocs = fixedLocs; //fixed coups légaux
        })(newLocs); 
      };

    if (board.dataset.player === "1") {
              
      (function removeIllegalMoves(arr) {
        var fixedLocs = [];
        for (var i=0; i<arr.length; i++)    
        if (b.cell(arr[i]).get() == null || b.cell(arr[i]).get().slice(-1) == 'b')  
        fixedLocs.push(arr[i]); 
        newLocs = fixedLocs;
      })(newLocs); 
    };

    bindMoveLocs = newLocs.slice();
    bindMovePiece = piece; 
    bindMoveEvents(bindMoveLocs); 

    function bindMoveEvents(locs) {
      for (var i=0; i<locs.length; i++) {
        b.cell(locs[i]).DOM().classList.add("moveable__indication");
        b.cell(locs[i]).on("click", movePiece);  
      }
    }  

    // move piece to new location when clicked
    function movePiece() {
      var dest = b.cell(this).where();
      var defender = b.cell(this).get();
      var attacker = piece.innerText;

      console.log(attacker + ' attacks ' + defender);
      
      switch (defender) {
        case null :
        break;
        default :
          switch(defender[0]) {
            case 'g' :
              if (board.dataset.player === "2") {
                winner = 1;
              }
              else if (board.dataset.player === "1")
                winner = 2;
              oxo.screens.loadScreen('end', end);
              break;
          }
        break;
      }

      b.cell(this).place(piece);
      b.removeEvents("click", movePiece);
      for (var i=0; i<newLocs.length; i++){ 
        b.cell(newLocs[i]).DOM().classList.remove("moveable__indication");
      }
          
      var distance = Math.max(Math.abs(loc[0] - dest[0]), Math.abs(loc[1] - dest[1]));
      console.log(distance);

      switch (token) {
        case 'foot':
          switch (distance) {
            case 1:
              board.dataset.mvmt += '2';
            break;
            case 2:
              board.dataset.mvmt += 4;
            break;
          } 
        break;
        case 'cav':
          switch(distance) {
            case 1:
              board.dataset.mvmt++;
            break;
            case 2:
              board.dataset.mvmt += '2';
            break;
            case 3:
              board.dataset.mvmt += '3';
            break;
            case 4:
              board.dataset.mvmt += 4;
            break;
          }
        break
      }

      if (board.dataset.mvmt >= 4) {   //structure pour enregustrer les points d'actions et changer de joueurs
          board.dataset.mvmt = 0;
        if (board.dataset.player === "1") {
          board.dataset.player = 2;
          sign.classList.toggle('cake');
        }
        else {
          board.dataset.player = 1;
          sign.classList.toggle('cake');
        }
      }
    }


          // remove previous green spaces and event listeners
  function resetBoard() {
    for (var r=0; r<b.rows(); r++) {
      for (var c=0; c<b.cols(); c++) {
        b.cell([r,c]).DOM().classList.remove("moveable__indication");
        b.cell([r,c]).removeOn("click", movePiece);
      }
    }
  }
  }  
};

function end() {
  var endimgp1 = document.getElementById('endimgp1');
  var endimgp2 = document.getElementById('endimgp2');

  if (winner == 2) {
    endimgp2.classList.remove('bcake');
  } else if (winner == 1) {
    endimgp1.classList.remove('bcake');
  }

}
oxo.inputs.listenKeyOnce('q', function() {
  oxo.screens.loadScreen('home');           
});


