const axios = require('axios');

module.exports = nodecg => {

	const githubResultsReplicant = nodecg.Replicant('github-results');

	nodecg.listenFor('findRepositories', async query => {
		nodecg.log.info(`Extension received the value ${query}!`);

		try {
			const apiResponse = await axios.get('https://api.github.com/search/repositories', {
				params: {
					q: query
				}
			});

			nodecg.log.info(`Found ${apiResponse.data.total_count} results from the github api!`);

			githubResultsReplicant.value = apiResponse.data.items;
		} catch (error) {
			nodecg.log.error(error);
		}
	});

}
