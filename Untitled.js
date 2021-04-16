
/*
// With Arrow function we have

  const data = async ()  => {
    const profileAnswers = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    console.log(await profileAnswers.json())
  }
  
  data();*/

  /*class Github {
    constructor() {
      this.client_id = '32ca7f6717e94a876703';
      this.client_secret = 'ed43d4d3c0f16d017175b106b4eafeb26e18cb74';
    }
  
    async getUser(user) {
      const profileAnswers = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileAnswers.json();
  
      return {
        profile
      }
    }
  }*/