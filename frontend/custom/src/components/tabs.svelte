<script>
    import {  createEventDispatcher} from "svelte";
    let dispatch = createEventDispatcher();
export let items
export let activeitem
</script>

<div class="tabs h-auto flex flex-wrap flex-col content-center ">
<ul>
   {#each items as item  } 
   <li on:click={()=> dispatch('tabchange' , item)}> 
    <div class="font-mono" style="padding: 20px;" class:active ={item === activeitem}>{item}</div> 
</li>
     
          {/each} 
</ul>    


</div>

<style>
    ul{
        display: flex;
        justify-content: center;
        list-style-type: none;
        padding: 0px;

    }
    li{
        font-size: 20px;
        margin: 10px  16px;
        color: gray;
        cursor: pointer;
    }
    .tabs{
        margin-bottom: 0px;
        padding: 20px   ;
    }
    .active{
        color: black;
        border: #d91b42 , 12px , solids;
        background-color: rgb(234, 245, 255);
        padding: 20px;
        border-radius: 10px;

        border-bottom: 2px solid ,#d91b42;
    }
</style>