{{#each params}}
  <div class="control">
    control for {{.}}
    <input type="text" name="{{.}}">
  </div>
{{/each}}
