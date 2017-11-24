<template>
    <div>
        <!-- The Modal -->
        <div class="modal fade" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Modal Heading</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <!-- Modal body -->
                    <div class="modal-body">
                        Modal body..
                    </div>
                    <!-- Modal footer -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid first-block">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-xs-12">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        Open modal
                    </button>
                </div>
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
                <table class="table table-striped table-bordered table-hover">
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
                        <tr v-for="p in filtered_post" v-bind:allRoute="p">
                            <td>{{p.serverName}}</td>
                            <td v-for="item in p.bossList">
                                <span v-if="item.show">{{item.name}}</span>
                            </td>
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
                    { "show": true, "floor": "F03", "name": "狸貓" },
                    { "show": true, "floor": "F06", "name": "狸貓" },
                    { "show": true, "floor": "F10", "name": "天使波利" },
                    { "show": true, "floor": "F13", "name": "幽靈波利" },
                    { "show": true, "floor": "F16", "name": "直升機哥布林" },
                    { "show": true, "floor": "F20", "name": "天使波利" },
                    { "show": true, "floor": "F23", "name": "藍瘋兔" },
                    { "show": true, "floor": "F26", "name": "藍瘋兔" },
                    { "show": true, "floor": "F30", "name": "皮里恩" },
                    { "show": true, "floor": "F33", "name": "幽靈波利" },
                    { "show": true, "floor": "F36", "name": "龍蠅" },
                    { "show": true, "floor": "F40", "name": "蟻后" },
                    { "show": true, "floor": "F43", "name": "直升機哥布林" },
                    { "show": true, "floor": "F46", "name": "狸貓" },
                ]
            }, {
                "serverName": "2b",
                "bossList": [
                    { "show": true, "floor": "F03", "name": "天使波利" },
                    { "show": true, "floor": "F06", "name": "狸貓" },
                    { "show": true, "floor": "F10", "name": "狸貓" },
                    { "show": true, "floor": "F13", "name": "皮里恩" },
                    { "show": true, "floor": "F16", "name": "天使波利" },
                    { "show": true, "floor": "F20", "name": "幽靈波利" },
                    { "show": true, "floor": "F23", "name": "龍蠅" },
                    { "show": true, "floor": "F26", "name": "藍瘋兔" },
                    { "show": true, "floor": "F30", "name": "幽靈波利" },
                    { "show": true, "floor": "F33", "name": "狸貓" },
                    { "show": true, "floor": "F36", "name": "藍瘋兔" },
                    { "show": true, "floor": "F40", "name": "直升機哥布林" },
                    { "show": true, "floor": "F43", "name": "蟻后" },
                    { "show": true, "floor": "F46", "name": "直升機哥布林" },
                ]
            }, {
                "serverName": "3f",
                "bossList": [
                    { "show": true, "floor": "F03", "name": "狸貓" },
                    { "show": true, "floor": "F06", "name": "幽靈波利" },
                    { "show": true, "floor": "F10", "name": "直升機哥布林" },
                    { "show": true, "floor": "F13", "name": "天使波利" },
                    { "show": true, "floor": "F16", "name": "藍瘋兔" },
                    { "show": true, "floor": "F20", "name": "天使波利" },
                    { "show": true, "floor": "F23", "name": "狸貓" },
                    { "show": true, "floor": "F26", "name": "幽靈波利" },
                    { "show": true, "floor": "F30", "name": "龍蠅" },
                    { "show": true, "floor": "F33", "name": "蟻后" },
                    { "show": true, "floor": "F36", "name": "狸貓" },
                    { "show": true, "floor": "F40", "name": "藍瘋兔" },
                    { "show": true, "floor": "F43", "name": "皮里恩" },
                    { "show": true, "floor": "F46", "name": "直升機哥布林" },
                ]
            }, {
                "serverName": "4g",
                "bossList": [
                    { "show": true, "floor": "F03", "name": "哥吉拉" },
                    { "show": true, "floor": "F06", "name": "天使波利" },
                    { "show": true, "floor": "F10", "name": "幽靈波利" },
                    { "show": true, "floor": "F13", "name": "直升機哥布林" },
                    { "show": true, "floor": "F16", "name": "哥吉拉" },
                    { "show": true, "floor": "F20", "name": "藍瘋兔" },
                    { "show": true, "floor": "F23", "name": "藍瘋兔" },
                    { "show": true, "floor": "F26", "name": "天使波利" },
                    { "show": true, "floor": "F30", "name": "幽靈波利" },
                    { "show": true, "floor": "F33", "name": "哥吉拉" },
                    { "show": true, "floor": "F36", "name": "直升機哥布林" },
                    { "show": true, "floor": "F40", "name": "龍蠅" },
                    { "show": true, "floor": "F43", "name": "蟻后" },
                    { "show": true, "floor": "F46", "name": "哥吉拉" },
                ]
            }]
        }
    },
    computed: {
        filtered_post() {
            return this.allRoute
                .filter((p) => {
                    var self = this;
                    var field = p.bossList;
                    var contain_flag = false;
                    field.forEach((f) => {
                        var m = f.name;
                        if (m.indexOf(self.filter) == -1) {
                            f.show = false;
                        } else {
                            f.show = true;
                        }
                        if (m.indexOf(self.filter) != -1) {
                            contain_flag = true;
                        }
                    });
                    return contain_flag;
                })
        }
    },
    mounted: function() {
    }
}

</script>
<style scoped>
table {
    table-layout: fixed;
}

</style>
