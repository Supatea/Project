<template>
    <div>
        <div class="container-fluid first-block">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-xs-12">
                    <div class="input-group">
                        <span class="input-group-btn">
                            <button class="btn btn-secondary" type="button">Go!</button>
                        </span>
                        <input type="text" class="form-control" placeholder="Search for..." aria-label="Search for..." v-model.trim="filter">
                    </div>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>3</th>
                            <th>6</th>
                            <th>10</th>
                            <th>13</th>
                            <th>16</th>
                            <th>20</th>
                            <th>23</th>
                            <th>26</th>
                            <th>30</th>
                            <th>33</th>
                            <th>36</th>
                            <th>40</th>
                            <th>43</th>
                            <th>46</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in filtered_post" v-bind:allRoute="p" v-bind:catas="catas">
                            <td>{{item.serverName}}</td>
                            <td v-for="boss in item.bossList">{{boss.name}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            filter: "",
            catas: [],
            allRoute: [{
                "serverName": "1a",
                "bossList": [
                    { "floor": "F03", "name": "狸貓" },
                    { "floor": "F06", "name": "狸貓" },
                    { "floor": "F10", "name": "天使波利" },
                    { "floor": "F13", "name": "幽靈波利" },
                    { "floor": "F16", "name": "直升機哥布林" },
                    { "floor": "F20", "name": "天使波利" },
                    { "floor": "F23", "name": "藍瘋兔" },
                    { "floor": "F26", "name": "藍瘋兔" },
                    { "floor": "F30", "name": "皮里恩" },
                    { "floor": "F33", "name": "幽靈波利" },
                    { "floor": "F36", "name": "龍蠅" },
                    { "floor": "F40", "name": "蟻后" },
                    { "floor": "F43", "name": "直升機哥布林" },
                    { "floor": "F46", "name": "狸貓" },
                ]
            }, {
                "serverName": "2b",
                "bossList": [
                    { "floor": "F03", "name": "天使波利" },
                    { "floor": "F06", "name": "狸貓" },
                    { "floor": "F10", "name": "狸貓" },
                    { "floor": "F13", "name": "皮里恩" },
                    { "floor": "F16", "name": "天使波利" },
                    { "floor": "F20", "name": "幽靈波利" },
                    { "floor": "F23", "name": "龍蠅" },
                    { "floor": "F26", "name": "藍瘋兔" },
                    { "floor": "F30", "name": "幽靈波利" },
                    { "floor": "F33", "name": "狸貓" },
                    { "floor": "F36", "name": "藍瘋兔" },
                    { "floor": "F40", "name": "直升機哥布林" },
                    { "floor": "F43", "name": "蟻后" },
                    { "floor": "F46", "name": "直升機哥布林" },
                ]
            }, {
                "serverName": "3f",
                "bossList": [
                    { "floor": "F03", "name": "狸貓" },
                    { "floor": "F06", "name": "幽靈波利" },
                    { "floor": "F10", "name": "直升機哥布林" },
                    { "floor": "F13", "name": "天使波利" },
                    { "floor": "F16", "name": "藍瘋兔" },
                    { "floor": "F20", "name": "天使波利" },
                    { "floor": "F23", "name": "狸貓" },
                    { "floor": "F26", "name": "幽靈波利" },
                    { "floor": "F30", "name": "龍蠅" },
                    { "floor": "F33", "name": "蟻后" },
                    { "floor": "F36", "name": "狸貓" },
                    { "floor": "F40", "name": "藍瘋兔" },
                    { "floor": "F43", "name": "皮里恩" },
                    { "floor": "F46", "name": "直升機哥布林" },
                ]
            }, {
                "serverName": "4g",
                "bossList": [
                    { "floor": "F03", "name": "狸貓" },
                    { "floor": "F06", "name": "天使波利" },
                    { "floor": "F10", "name": "幽靈波利" },
                    { "floor": "F13", "name": "直升機哥布林" },
                    { "floor": "F16", "name": "狸貓" },
                    { "floor": "F20", "name": "藍瘋兔" },
                    { "floor": "F23", "name": "藍瘋兔" },
                    { "floor": "F26", "name": "天使波利" },
                    { "floor": "F30", "name": "幽靈波利" },
                    { "floor": "F33", "name": "狸貓" },
                    { "floor": "F36", "name": "直升機哥布林" },
                    { "floor": "F40", "name": "龍蠅" },
                    { "floor": "F43", "name": "蟻后" },
                    { "floor": "F46", "name": "皮里恩" },
                ]
            }]
        }
    },
    computed: {
        filtered_post() {
            return this.allRoute
                .filter((p) => {
                    var field = ["serverName"];
                    var contain_flag = false;
                    field.forEach((f) => {
                        if (p[f].toLowerCase().indexOf(this.filter.toLowerCase()) != -1)
                            contain_flag = true;
                    });
                    return contain_flag;
                })
            console.log(cache.tag);
            return cache;
        }
    },
    mounted: function() {
    }
}

</script>
<style scoped>


</style>
