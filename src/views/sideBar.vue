<template>
	<div class="main_menu" :class="`${is_expanded ? 'is-expanded' : ''}`">
		<div class="logo">
			<img :src="logoURL" alt="Vue" />
			<span class="textLogo">COMPAS</span>
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">keyboard_double_arrow_right</span>
			</button>
		</div>

		<h3>Menu</h3>
		<div class="menu">
			<router-link to="/" class="button">
				<span class="material-icons">home</span>
				<span class="text">Главная</span>
			</router-link>
			<router-link to="/about" class="button">
				<span class="material-icons">description</span>
				<span class="text">Лист Закупа</span>
			</router-link>
			<router-link to="/todo" class="button">
				<span class="material-icons">add_circle</span>
				<span class="text">Планировщик</span>
			</router-link>
			<router-link to="/contact" class="button">
				<span class="material-icons">email</span>
				<span class="text">Contact</span>
			</router-link>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import logoURL from '../assets/compass.png'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>
.main_menu {
	display: flex;
	flex-direction: column;

	background-color: rgb(240, 245, 245);
	color: black;

	width: calc(2rem);
	overflow: hidden;
	min-height: 100%;
	padding: 1rem;

	transition: 0.2s ease-in-out;

	.flex {
		flex: 1 1 0;
	}

	.logo {
		margin-bottom: 1rem;
		display: flex;
		align-items: center;

		img {
			width: 2rem;
		}

		.textLogo{
			margin-top: 0.4rem;
			padding: 1rem;
			font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
			font-size: 30px;
			font-weight: bolder;
		}
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;

		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
					color: grey;
					transform: translateX(0.5rem);
				}
			}
		}
	}

	h3, .button .text  {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

	}

	h3 {
		color: grey;
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}

	.menu {
		margin: 0 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
      cursor: pointer;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-icons {
				font-size: 2rem;
				color: black;
				transition: 0.2s ease-in-out;
			}
			.text {
				color: black;
				transition: 0.2s ease-in-out;
			}

			&:hover {
				background-color: rgba(77, 77, 77, 0.336);

				.material-icons, .text {
					color: black;
				}
			}

			&.router-link-exact-active {
				background-color: rgba(77, 77, 77, 0.336);
				border-right: 5px solid #0c3eaaec;

				.material-icons, .text {
					color: black;
				}
			}
		}
	}

	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		p {
			font-size: 0.875rem;
			color: #232323;
		}
	}

	&.is-expanded {
		width: 300px;

		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
      .textLogo{
      opacity: 0;
    }
		}
    
    

    

		h3, .button .text {
			opacity: 1;
		}

		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}

		.footer {
			opacity: 0;
			transition: opacity 0.3s ease-in-out;
		}
	}

	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
		
	

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}


}
</style>