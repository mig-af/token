
        // Mobile Menu Toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
        
        // Wallet Connection Modal
        const walletModal = document.getElementById('wallet-modal');
        const connectWalletButtons = document.querySelectorAll('[id^="connect-wallet"]');
        const closeWalletModal = document.getElementById('close-wallet-modal');
        
        connectWalletButtons.forEach(button => {
            button.addEventListener('click', function() {
                walletModal.classList.remove('hidden');
            });
        });
        
        closeWalletModal.addEventListener('click', function() {
            walletModal.classList.add('hidden');
        });
        
        // Buy Token Modal
        const buyModal = document.getElementById('buy-modal');
        const buyTokenButtons = document.querySelectorAll('[id^="buy-token"]');
        const closeBuyModal = document.getElementById('close-buy-modal');
        
        buyTokenButtons.forEach(button => {
            button.addEventListener('click', function() {
                buyModal.classList.remove('hidden');
            });
        });
        
        closeBuyModal.addEventListener('click', function() {
            buyModal.classList.add('hidden');
        });
        
        // Close modals when clicking outside
        [walletModal, buyModal].forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                }
            });
        });
        
        // Countdown Timer
        function updateCountdown() {
            // Set the date we're counting down to (7 days from now)
            const countDownDate = new Date();
            countDownDate.setDate(countDownDate.getDate() + 7);
            
            // Update every second
            const x = setInterval(function() {
                const now = new Date().getTime();
                const distance = countDownDate - now;
                
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                document.getElementById('countdown-days').textContent = days.toString().padStart(2, '0');
                document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
                document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
                document.getElementById('countdown-seconds').textContent = seconds.toString().padStart(2, '0');
                
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById('countdown-days').textContent = '00';
                    document.getElementById('countdown-hours').textContent = '00';
                    document.getElementById('countdown-minutes').textContent = '00';
                    document.getElementById('countdown-seconds').textContent = '00';
                }
            }, 1000);
        }
        
        updateCountdown();
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobile-menu');
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });