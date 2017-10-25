main: index.html
	echo "4Rv4Rda|\\|" | sudo -S rm -rf /srv/http/*
	echo "4Rv4Rda|\\|" | sudo -S cp -R /mnt/GOAT/GITHUB/tihangratiela.github.io/* /srv/http/
	clear
	echo "Website up on 127.0.0.1"

clean: /srv/http/index.html
	echo "4Rv4Rda|\\|" | sudo -S rm -rf /srv/http/*
	clear
	echo "/srv/http cleared"
	
