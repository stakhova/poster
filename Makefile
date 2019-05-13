deploy_staging:
	npm install
	bower install
	gulp build
	rsync -r --exclude .git --exclude bower_components --exclude node_modules \
		 /data/projects/afisha_layout/poster root@285544-vds-igorfiv.gmhost.pp.ua:/home
