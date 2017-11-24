<template>
	<div id="app">
		<!-- Fixed navbar -->
		<!-- Fixed navbar -->
		<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			<a class="navbar-brand" href="#">Fixed navbar</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
					</li>
				</ul>
				<form class="form-inline mt-2 mt-md-0">					
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">NEW</button>
				</form>
			</div>
		</nav>
		<router-view />
		<footer class="footer">
			<div class="container">
				<span class="text-muted">Place sticky footer content here.</span>
			</div>
		</footer>
	</div>
</template>
<script>
export default {
	name: 'app'
}

</script>
<style>
/* Sticky footer styles
-------------------------------------------------- */

html {
	position: relative;
	min-height: 100%;
}

body {
	/* Margin bottom by footer height */
	margin-bottom: 60px;
}

.footer {
	position: absolute;
	bottom: 0;
	width: 100%;
	/* Set the fixed height of the footer here */
	height: 60px;
	line-height: 60px;
	/* Vertically center the text there */
	background-color: #f5f5f5;
}



/* Custom page CSS
-------------------------------------------------- */


/* Not required for template or sticky footer method. */

.first-block {
	padding: 60px 15px 0;
}

.footer>.container {
	padding-right: 15px;
	padding-left: 15px;
}

code {
	font-size: 80%;
}

</style>
