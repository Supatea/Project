<template>
	<div class="hello">
		<!-- Begin page content -->
		<div class="container">
			<div class="mt-3">
				<h1>Sticky footer with fixed navbar</h1>
			</div>
			<p class="lead">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with <code>padding-top: 60px;</code> on the <code>body &gt; .container</code>.</p>
			<p>Back to <a href="../sticky-footer">the default sticky footer</a> minus the navbar.</p>
			<h1>{{ msg }}</h1>
			<h2>Essential Links</h2>
		</div>
	</div>
</template>
<script>
export default {
	name: 'HelloWorld',
	data() {
		return {
			msg: 'Welcome to Your Vue.js Awwpp'
		}
	}
}

</script>
<!-- Add "scoped" attribute to limit CSS to th
is component only -->
<style scoped>


</style>
