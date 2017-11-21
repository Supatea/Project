<template>
  <div>
    <div class="container first">
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>server name</th>
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
            <tr v-for="item in floor">
              <td>{{item.serverName}}</td>
              <td>{{item.floor.F3}}</td>
              <td>{{item.floor.F6}}</td>
              <td>{{item.floor.F10}}</td>
              <td>{{item.floor.F13}}</td>
              <td>{{item.floor.F16}}</td>
              <td>{{item.floor.F20}}</td>
              <td>{{item.floor.F23}}</td>
              <td>{{item.floor.F26}}</td>
              <td>{{item.floor.F30}}</td>
              <td>{{item.floor.F33}}</td>
              <td>{{item.floor.F36}}</td>
              <td>{{item.floor.F40}}</td>
              <td>{{item.floor.F43}}</td>
              <td>{{item.floor.F46}}</td>
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
      floor: [{
        "serverName": "1a",
        "floor": {
          "F3": "123",
          "F6": "456",
          "F10": "789",
          "F13": "123",
          "F16": "456",
          "F20": "789",
          "F23": "123",
          "F26": "456",
          "F30": "789",
          "F33": "123",
          "F36": "456",
          "F40": "789",
          "F43": "123",
          "F46": "456"
        }
      }, {
        "serverName": "1a",
        "floor": {
          "F3": "123",
          "F6": "456",
          "F10": "789",
          "F13": "123",
          "F16": "456",
          "F20": "789",
          "F23": "123",
          "F26": "456",
          "F30": "789",
          "F33": "123",
          "F36": "456",
          "F40": "789",
          "F43": "123",
          "F46": "456"
        }
      }, {
        "serverName": "1a",
        "floor": {
          "F3": "123",
          "F6": "456",
          "F10": "789",
          "F13": "123",
          "F16": "456",
          "F20": "789",
          "F23": "123",
          "F26": "456",
          "F30": "789",
          "F33": "123",
          "F36": "456",
          "F40": "789",
          "F43": "123",
          "F46": "456"
        }
      }, {
        "serverName": "1a",
        "floor": {
          "F3": "123",
          "F6": "456",
          "F10": "789",
          "F13": "123",
          "F16": "456",
          "F20": "789",
          "F23": "123",
          "F26": "456",
          "F30": "789",
          "F33": "123",
          "F36": "456",
          "F40": "789",
          "F43": "123",
          "F46": "456"
        }
      }]
    }
  }
}

</script>
<style scoped>


</style>
