// Create time stamp
var now;
function loop () {
  now = moment();
}
setInterval(loop, 1000);

var STORAGE_KEY = 'vue-js-test-L8zmbAdW'
var commentStorage = {
  fetch: function () {
    var comments = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return comments;
  },
  save: function (comments) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
  }
}

const UserCard = {
  template:`
  <div class="card">
    <div class="header">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="user.thumImage" alt="">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ user.name }}</p>
          <p class="subtitle is-6">{{ user.account }}</p>
        </div>
      </div>
    </div>
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="user.postedImage" alt="">
      </figure>
    </div>
    <div class="card-content">
      <div class="level is-mobile">
        <div class="level-left">
          <div class="level-item has-text-centered">
            <a href="#">
              <i class="material-icons">favorite_border</i>
            </a>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <a href="#">
                <i class="material-icons">chat_bubble_outline</i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <p><strong>{{ user.likes }} Likes</strong></p>
        <transition-group tag="div" name="list" class="comment-wrap">
          <div class="comment" v-for="(comment, index) in comments" :key="comment">
            {{ comment.text }}
            <a>@santa</a>
            <a href="#">#css</a>
            <a href="#">#responsive</a>
            <br>
            <time>{{ comment.time | moment }}</time>
          </div>
        </transition-group>
      </div>
    </div>
    <div class="card-footer">
      <form class="columns is-mobile" v-on:submit="addComment">
        <div class="column is-10">
          <div class="field">
            <div class="control">
              <input maxlength='50' v-model="inputVal" class="input is-medium" type="text" placeholder="Add a comment . . .">
            </div>
          </div>
        </div>
        <div class="column">
          <button type="submit" class="button is-primary">Send</button>
        </div>
      </form>
    </div>
  </div>
  `,
  data: function () {
    return {
      inputVal: '',
      comments: commentStorage.fetch()
    }
  },
  props: [ 'user' ],
  filters: {
    moment: function (date) {
      return moment(date).format('YYYY/MM/DD HH:mm:ss');
    }
  },
  watch: {
    comments: {
      handler: function (comments) {
        commentStorage.save(comments);
      }
    }
  },
  methods: {
    addComment: function (e) {
      e.preventDefault();
      if (this.inputVal) {
        this.comments.push({
          text: this.inputVal,
          time: now
        });
        this.inputVal = '';
      }
    }
  }
}

const users = [
  {
    id: 1,
    thumImage: '//source.unsplash.com/user/erondu/96x96',
    name: 'Damrey',
    account: '@Damrey',
    postedImage: '//source.unsplash.com/user/erondu/1280x960',
    likes: 0
  },
  {
    id: 2,
    thumImage: '//source.unsplash.com/user/erondu/96x96',
    name: 'Haikui',
    account: '@Haikui',
    postedImage: '//source.unsplash.com/user/erondu/1280x960',
    likes: 1
  },
  {
    id: 3,
    thumImage: '//source.unsplash.com/user/erondu/96x96',
    name: 'Kirogi',
    account: '@Kirogi',
    postedImage: '//source.unsplash.com/user/erondu/1280x960',
    likes: 2
  },
  {
    id: 4,
    thumImage: '//source.unsplash.com/user/erondu/96x96',
    name: 'Kai-tak',
    account: '@Kai-tak',
    postedImage: '//source.unsplash.com/user/erondu/1280x960',
    likes: 4
  },
  {
    id: 5,
    thumImage: '//source.unsplash.com/user/erondu/96x96',
    name: 'Tembin',
    account: '@Tembin',
    postedImage: '//source.unsplash.com/user/erondu/1280x960',
    likes: 16
  },
  {
    id: 6,
    thumImage: '//source.unsplash.com/user/erondu/96x96',
    name: 'Bolaven',
    account: '@Bolaven',
    postedImage: '//source.unsplash.com/user/erondu/1280x960',
    likes: 256
  }
]

new Vue({
  el: '#app',
  data: {
    users
  },
  components: {
    'user-card': UserCard
  }
})
