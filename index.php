<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Pages</title>
    <!-- fontawesome -->
    <link rel="stylesheet" href="css/fontawesome-all.min.css">
    <!-- our style -->
    <link rel = "stylesheet" href = "css/main.css" />
</head>
<body>
    <nav class="navbar">
        <ul>
            <li><span><i class="fas fa-search"></i></span></li>
            <li><span>Logo</span></li>
            <li><span class="bar_icon"><i class="fas fa-bars"></i></span></li>
        </ul>
    </nav>

    <div class="sidebar">
        <span class="close_sidebar"><i class="fas fa-times"></i></span>
        <div class="clearfix"></div>
        <ul>
            <li><a href="#">home</a></li>
            <li><a href="#" action="link1">p1</a></li>
            <li><a href="#" action="link2">p2</a></li>
            <li><a href="#" action="link3">p3</a></li>
        </ul>
    </div>

    <div class="main_menu">
        <ul>
            <li><a href="index.php" >home</a></li>
            <li><a href="#" action="link1" id="p1">p1</a></li>
            <li><a href="#" action="link2" id="p2">p2</a></li>
            <li><a href="#" action="link3" id="p3">p3</a></li>
        </ul>
    </div>

    <div id="body">
        
    </div>

    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="main.js"></script>
</body>

</html>