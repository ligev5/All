<template>
  <div class="Internet">
    <div class="top">
      <InternetTitle></InternetTitle>
    </div>
		<div class="box">
			<div class="left">
				<div class="userTotal">
					<userTotal></userTotal>
				</div>
				<div class="userAge">
					<userAge></userAge>
				</div>
				<div class="userlogin">
					<userlogin></userlogin>
				</div>
				<div class="usersex">
					<usersex></usersex>
				</div>
				<div class="usertake">
					<usertake></usertake>
				</div>
				<div class="usergoods">
					<usergoods></usergoods>
				</div>
			</div>
			<div class="right">
				<div class="userpresent">
					<userpresent></userpresent>
				</div>

				<div class="rightleft">
					<div class="usersale">
					<usersale></usersale>
				</div>
				<div class="userlist">
					<userlist></userlist>
				</div>
				<div class="usertime">
					<usertime></usertime>
				</div>
				</div>


			</div>

		</div>
  </div>
</template>

<script>
import InternetTitle from "../components/InternetTitle"
import userTotal from "../components/userTotal"
import userAge from "../components/userAge"
import userlogin from "../components/userlogin"
import usersex from "../components/usersex"
import usertake from "../components/usertake"
import usergoods from "../components/usergoods"
import userpresent from "../components/userpresent"
import usersale from "../components/usersale"
import userlist from "../components/userlist"
import usertime from "../components/usertime"
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    InternetTitle,userTotal,userAge,userlogin,usersex,usertake,usergoods,userpresent,usersale,userlist,usertime
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.Internet{
	width: 100vm;
	height: 100vh;
	background: #1c1c1c;
	.top{
		width: 100%;
		height: 1rem;
	}
	.box{
		width: 100%;
		height: 100%;
		display: flex;
		.left{
			width: 25%;
			height: 100%;
			background: #3b3c3ea7;
			.userTotal{
				// height: 160px;
				// border-bottom: #2b2c2e 10px solid;
			}
		}
		.right{
			margin-left: 8px;
			width: 75%;
			height: 100%;
			background: #1c1c1c;

			.rightleft{
				width: 60%;
			}
		}
	}
}
</style>
