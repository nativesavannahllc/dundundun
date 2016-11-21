<?php
	$m = str_replace("/", "", $_SERVER['REQUEST_URI']);
	$template = "templates/main.php";
	if ($m)
	{
		$template = sprintf("templates/%s.php", $m);
		if (!file_exists($template))
		{
			header($_SERVER["SERVER_PROTOCOL"]." 404 Not Found", true, 404); 
			echo "<h1>404 File not found</h1>";
			exit();
		}
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Privacy Policy - Dun Dun Dun App</title>
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>
	<body>
		<div id="heading">
		<h1>NS Labs</h1>
		</div>
		<div id="main">
		<h2>Dun Dun Dun!</h2>
<?php include($template); ?>
		</div>
		<div id="footer">
			&copy; 2016 Native Savannah LLC
		</div>
	</body>
</html>