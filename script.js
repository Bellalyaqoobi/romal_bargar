 // دادههای منو
        let menuItems = JSON.parse(localStorage.getItem('menuItems')) || [
            {
                id: 1,
                name: "برگر کلاسیک",
                description: "برگر گوشت گاو با پنیر چدار، کاهو و گوجه فرنگی تازه",
                price: 180,
                category: "burgers",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                badge: "پرفروش",
                active: true
            },
            {
                id: 2,
                name: "برگر دبل",
                description: "دو عدد پتی گوشت گاو با پنیر و سس مخصوص",
                price: 250,
                category: "burgers",
                image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                active: true
            },
            {
                id: 3,
                name: "برگر مرغ",
                description: "برگر مرغ تازه با سس مخصوص و سبزیجات",
                price: 200,
                category: "burgers",
                image: "https://images.unsplash.com/photo-1606755962773-d324e74534a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                badge: "جدید",
                active: true
            },
            {
                id: 4,
                name: "برگر ویژه",
                description: "برگر ویژه با پنیر، قارچ و سس باربیکیو",
                price: 300,
                category: "burgers",
                image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                active: true
            },
            {
                id: 5,
                name: "پیتزا مارجریتا",
                description: "پیتزا با سس گوجه، پنیر موزارلا و ریحان تازه",
                price: 320,
                category: "pizzas",
                image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                badge: "جدید",
                active: true
            },
            {
                id: 6,
                name: "پیتزا پپرونی",
                description: "پیتزا با پنیر موزارلا و پپرونی تند",
                price: 350,
                category: "pizzas",
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                active: true
            },
            {
                id: 7,
                name: "ساندویچ مرغ",
                description: "ساندویچ مرغ گریل شده با سبزیجات تازه و سس مخصوص",
                price: 150,
                category: "sandwiches",
                image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                active: true
            },
            {
                id: 8,
                name: "ساندویچ تن",
                description: "ساندویچ ماهی تن با سس مایونز و سبزیجات تازه",
                price: 120,
                category: "sandwiches",
                image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                active: true
            },
            {
                id: 9,
                name: "کباب کوبیده",
                description: "کباب کوبیده با برنج ایرانی و گوجه کبابی",
                price: 280,
                category: "kababs",
                image: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                badge: "ویژه",
                active: true
            },
            {
                id: 10,
                name: "کباب بخاری",
                description: "کباب بخاری با نان تازه و سبزیجات",
                price: 220,
                category: "kababs",
                image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                active: true
            },
            {
                id: 11,
                name: "نوشابه",
                description: "نوشابه گازدار در طعمهای مختلف",
                price: 40,
                category: "drinks",
                image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                active: true
            },
            {
                id: 12,
                name: "آبمیوه طبیعی",
                description: "آبمیوه تازه و طبیعی بدون مواد افزودنی",
                price: 60,
                category: "drinks",
                image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                active: true
            }
        ];

        // دادههای سفارشات
        let orders = JSON.parse(localStorage.getItem('orders')) || [
            {
                id: 1,
                code: "FS-58421",
                customer: "احمد محمدی",
                items: [
                    { name: "برگر کلاسیک", quantity: 2, price: 180 },
                    { name: "نوشابه", quantity: 2, price: 40 }
                ],
                total: 440,
                date: "۱۴۰۲/۰۵/۱۵",
                status: "delivered",
                address: "کابل، ناحیه ۴، جاده میوند، کوچه ۱۲"
            },
            {
                id: 2,
                code: "FS-58420",
                customer: "زهرا کریمی",
                items: [
                    { name: "پیتزا پپرونی", quantity: 1, price: 350 },
                    { name: "برگر مرغ", quantity: 1, price: 200 },
                    { name: "آبمیوه طبیعی", quantity: 2, price: 60 }
                ],
                total: 730,
                date: "۱۴۰۲/۰۵/۱۵",
                status: "ready",
                address: "کابل، ناحیه ۱۰، جاده کارته سخی"
            },
            {
                id: 3,
                code: "FS-58419",
                customer: "محمد حسینی",
                items: [
                    { name: "ساندویچ مرغ", quantity: 2, price: 150 },
                    { name: "نوشابه", quantity: 1, price: 40 }
                ],
                total: 340,
                date: "۱۴۰۲/۰۵/۱۵",
                status: "preparing",
                address: "کابل، ناحیه ۶، جاده ده افغانان"
            }
        ];

        // دادههای کاربران
        let users = JSON.parse(localStorage.getItem('users')) || [
            {
                id: 1,
                name: "احمد محمدی",
                email: "ahmad@example.com",
                phone: "0701234567",
                joinDate: "۱۴۰۲/۰۳/۱۲",
                ordersCount: 8
            },
            {
                id: 2,
                name: "زهرا کریمی",
                email: "zahra@example.com",
                phone: "0702345678",
                joinDate: "۱۴۰۲/۰۴/۰۵",
                ordersCount: 5
            },
            {
                id: 3,
                name: "محمد حسینی",
                email: "mohammad@example.com",
                phone: "0703456789",
                joinDate: "۱۴۰۲/۰۲/۲۰",
                ordersCount: 12
            }
        ];

        // متغیرهای گلوبال
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let currentCategory = 'all';
        let orderCode = '';
        let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        let isAdmin = JSON.parse(localStorage.getItem('isAdmin')) || false;
        let editingProductId = null;

        // المنتهای DOM
        const menuItemsContainer = document.getElementById('menuItems');
        const cartIcon = document.getElementById('cartIcon');
        const cartCount = document.getElementById('cartCount');
        const cartModal = document.getElementById('cartModal');
        const closeCart = document.getElementById('closeCart');
        const cartItemsContainer = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const orderForm = document.getElementById('orderForm');
        const orderFormElement = document.getElementById('orderFormElement');
        const backToCart = document.getElementById('backToCart');
        const orderConfirmation = document.getElementById('orderConfirmation');
        const newOrderBtn = document.getElementById('newOrderBtn');
        const categoryButtons = document.querySelectorAll('.category-btn');
        const notificationPanel = document.getElementById('notificationPanel');
        const loginBtn = document.getElementById('loginBtn');
        const registerBtn = document.getElementById('registerBtn');
        const adminBtn = document.getElementById('adminBtn');
        const userAdminBtn = document.getElementById('userAdminBtn');
        const loginModal = document.getElementById('loginModal');
        const closeLogin = document.getElementById('closeLogin');
        const loginTabs = document.querySelectorAll('.login-tab');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const loginFormElement = document.getElementById('loginForm');
        const registerFormElement = document.getElementById('registerForm');
        const userActions = document.getElementById('userActions');
        const userInfo = document.getElementById('userInfo');
        const userName = document.getElementById('userName');
        const userAvatar = document.getElementById('userAvatar');
        const logoutBtn = document.getElementById('logoutBtn');
        const orderTotal = document.getElementById('orderTotal');
        const adminPanel = document.getElementById('adminPanel');
        const closeAdmin = document.getElementById('closeAdmin');
        const adminTabs = document.querySelectorAll('.admin-tab');
        const adminContents = document.querySelectorAll('.admin-content');
        const ordersTableBody = document.getElementById('ordersTableBody');
        const productsTableBody = document.getElementById('productsTableBody');
        const usersTableBody = document.getElementById('usersTableBody');
        const recentOrdersTable = document.getElementById('recentOrdersTable');
        const addProductBtn = document.getElementById('addProductBtn');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileNav = document.getElementById('mobileNav');
        const closeMobileMenu = document.getElementById('closeMobileMenu');
        const mobileLoginBtn = document.getElementById('mobileLoginBtn');
        const mobileRegisterBtn = document.getElementById('mobileRegisterBtn');
        const mobileAdminBtn = document.getElementById('mobileAdminBtn');
        const mobileUserInfo = document.getElementById('mobileUserInfo');
        const mobileUserName = document.getElementById('mobileUserName');
        const mobileUserActions = document.getElementById('mobileUserActions');
        const mobileLoggedInActions = document.getElementById('mobileLoggedInActions');
        const mobileLogoutBtn = document.getElementById('mobileLogoutBtn');
        const mobileUserAdminBtn = document.getElementById('mobileUserAdminBtn');
        const todayOrders = document.getElementById('todayOrders');
        const todayRevenue = document.getElementById('todayRevenue');
        const newUsers = document.getElementById('newUsers');
        const activeProducts = document.getElementById('activeProducts');
        const productModal = document.getElementById('productModal');
        const closeProduct = document.getElementById('closeProduct');
        const productModalTitle = document.getElementById('productModalTitle');
        const productForm = document.getElementById('productForm');
        const cancelProduct = document.getElementById('cancelProduct');
        const saveProduct = document.getElementById('saveProduct');

        // ذخیره دادهها در localStorage
        function saveData() {
            localStorage.setItem('menuItems', JSON.stringify(menuItems));
            localStorage.setItem('orders', JSON.stringify(orders));
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('cart', JSON.stringify(cart));
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            localStorage.setItem('isAdmin', JSON.stringify(isAdmin));
        }

        // تابع جدید برای ارسال پیام به تلگرام
        async function sendTelegramNotification(orderData) {
            const botToken = '8330611813:AAHYATNGh031y4NgEC8eYgrMhcRA2EUYYXo';
            const chatId = '7646011938';
            
            // فرمتبندی پیام برای تلگرام
            const message = `📦 سفارش جدید دریافت شد!
            
🆔 کد سفارش: ${orderData.orderCode}
👤 نام مشتری: ${orderData.customerName}
📞 شماره تماس: ${orderData.customerPhone}
📍 آدرس: ${orderData.address}
🏙️ ولایت: ${document.getElementById('province').options[document.getElementById('province').selectedIndex].text}
💰 مبلغ کل: ${orderData.total} افغانی

📋 جزئیات سفارش:
${orderData.items.map(item => `• ${item.name} (${item.quantity} عدد) - ${item.price * item.quantity} افغانی`).join('\n')}

📝 توضیحات: ${orderData.notes || 'بدون توضیح'}`;

            try {
                const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                        parse_mode: 'HTML'
                    })
                });
                
                const result = await response.json();
                if (result.ok) {
                    console.log('پیام با موفقیت به تلگرام ارسال شد');
                    showNotification('اطلاعات سفارش به مدیر ارسال شد', 'success');
                } else {
                    console.error('خطا در ارسال پیام به تلگرام:', result);
                    showNotification('خطا در ارسال پیام به مدیر', 'error');
                }
            } catch (error) {
                console.error('خطا در ارتباط با تلگرام:', error);
                showNotification('خطا در ارتباط با تلگرام', 'error');
            }
        }

        // نمایش منوی محصولات
        function displayMenuItems() {
            menuItemsContainer.innerHTML = '';
            
            const filteredItems = currentCategory === 'all' 
                ? menuItems.filter(item => item.active) 
                : menuItems.filter(item => item.category === currentCategory && item.active);
            
            if (filteredItems.length === 0) {
                menuItemsContainer.innerHTML = '<div class="empty-cart"><i class="fas fa-search"></i><p>محصولی در این دستهبندی یافت نشد</p></div>';
                return;
            }
            
            filteredItems.forEach(item => {
                const menuItemElement = document.createElement('div');
                menuItemElement.className = 'menu-item';
                menuItemElement.innerHTML = `
                    ${item.badge ? `<div class="item-badge">${item.badge}</div>` : ''}
                    <img src="${item.image}" alt="${item.name}" class="item-image">
                    <div class="item-details">
                        <h3 class="item-title">${item.name}</h3>
                        <p class="item-description">${item.description}</p>
                        <div class="item-footer">
                            <span class="item-price">${item.price} افغانی</span>
                            <button class="add-to-cart" data-id="${item.id}">
                                <i class="fas fa-cart-plus"></i>
                                افزودن
                            </button>
                        </div>
                    </div>
                `;
                menuItemsContainer.appendChild(menuItemElement);
            });
            
            // اضافه کردن ایونت به دکمههای افزودن به سبد
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = parseInt(e.target.closest('.add-to-cart').getAttribute('data-id'));
                    addToCart(itemId);
                });
            });
        }

        // نمایش محصولات در پنل مدیریت
        function displayProductsInAdmin() {
            productsTableBody.innerHTML = '';
            
            menuItems.forEach(item => {
                const statusText = item.active ? 'فعال' : 'غیرفعال';
                const statusClass = item.active ? 'status-delivered' : 'status-pending';
                
                const productRow = document.createElement('tr');
                productRow.innerHTML = `
                    <td><img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px;"></td>
                    <td>${item.name}</td>
                    <td>${getCategoryName(item.category)}</td>
                    <td>${item.price} افغانی</td>
                    <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                    <td>
                        <button class="action-btn btn-edit" data-id="${item.id}">ویرایش</button>
                        <button class="action-btn ${item.active ? 'btn-delete' : 'btn-update'}" data-id="${item.id}">
                            ${item.active ? 'غیرفعال' : 'فعال'}
                        </button>
                        <button class="action-btn btn-delete delete-product" data-id="${item.id}">حذف</button>
                    </td>
                `;
                productsTableBody.appendChild(productRow);
            });
            
            // اضافه کردن ایونت به دکمههای مدیریت محصولات
            document.querySelectorAll('.btn-edit').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = parseInt(e.target.getAttribute('data-id'));
                    editProduct(itemId);
                });
            });
            
            document.querySelectorAll('.btn-delete:not(.delete-product)').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = parseInt(e.target.getAttribute('data-id'));
                    toggleProductStatus(itemId);
                });
            });
            
            document.querySelectorAll('.delete-product').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = parseInt(e.target.getAttribute('data-id'));
                    deleteProduct(itemId);
                });
            });
        }

        // نمایش سفارشات در پنل مدیریت
        function displayOrdersInAdmin() {
            ordersTableBody.innerHTML = '';
            recentOrdersTable.innerHTML = '';
            
            // نمایش سفارشات اخیر در داشبورد
            const recentOrders = orders.slice(0, 4);
            recentOrders.forEach(order => {
                const statusText = getStatusText(order.status);
                const statusClass = `status-${order.status}`;
                
                const orderRow = document.createElement('tr');
                orderRow.innerHTML = `
                    <td>${order.code}</td>
                    <td>${order.customer}</td>
                    <td>${order.total} افغانی</td>
                    <td>${order.date}</td>
                    <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                `;
                recentOrdersTable.appendChild(orderRow);
            });
            
            // نمایش همه سفارشات در تب مدیریت سفارشات
            orders.forEach(order => {
                const statusText = getStatusText(order.status);
                const statusClass = `status-${order.status}`;
                const itemsText = order.items.map(item => `${item.name} (${item.quantity})`).join('، ');
                
                const orderRow = document.createElement('tr');
                orderRow.innerHTML = `
                    <td>${order.code}</td>
                    <td>${order.customer}</td>
                    <td>${itemsText}</td>
                    <td>${order.total} افغانی</td>
                    <td>${order.date}</td>
                    <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                    <td>
                        <button class="action-btn btn-edit" data-id="${order.id}">جزئیات</button>
                        <button class="action-btn btn-update" data-id="${order.id}">بروزرسانی وضعیت</button>
                    </td>
                `;
                ordersTableBody.appendChild(orderRow);
            });
        }

        // نمایش کاربران در پنل مدیریت
        function displayUsersInAdmin() {
            usersTableBody.innerHTML = '';
            
            users.forEach(user => {
                const userRow = document.createElement('tr');
                userRow.innerHTML = `
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.joinDate}</td>
                    <td>${user.ordersCount}</td>
                    <td>
                        <button class="action-btn btn-edit" data-id="${user.id}">ویرایش</button>
                        <button class="action-btn btn-delete" data-id="${user.id}">حذف</button>
                    </td>
                `;
                usersTableBody.appendChild(userRow);
            });
        }

        // بروزرسانی آمار داشبورد
        function updateDashboardStats() {
            // محاسبه آمار
            const today = new Date().toLocaleDateString('fa-IR');
            const todayOrdersCount = orders.filter(order => order.date === today).length;
            const todayRevenueTotal = orders
                .filter(order => order.date === today)
                .reduce((sum, order) => sum + order.total, 0);
            const activeProductsCount = menuItems.filter(item => item.active).length;
            
            // بروزرسانی مقادیر
            todayOrders.textContent = todayOrdersCount;
            todayRevenue.textContent = todayRevenueTotal.toLocaleString();
            newUsers.textContent = users.length;
            activeProducts.textContent = activeProductsCount;
        }

        // دریافت نام دستهبندی
        function getCategoryName(category) {
            const categories = {
                'burgers': 'برگرها',
                'pizzas': 'پیتزاها',
                'sandwiches': 'ساندویچها',
                'kababs': 'کبابها',
                'drinks': 'نوشیدنیها'
            };
            return categories[category] || category;
        }

        // دریافت متن وضعیت
        function getStatusText(status) {
            const statuses = {
                'pending': 'در انتظار تایید',
                'preparing': 'در حال آمادهسازی',
                'ready': 'آماده تحویل',
                'delivered': 'تحویل شده'
            };
            return statuses[status] || status;
        }

        // افزودن محصول به سبد خرید
        function addToCart(itemId) {
            const item = menuItems.find(i => i.id === itemId);
            const existingItem = cart.find(i => i.id === itemId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...item,
                    quantity: 1
                });
            }
            
            updateCart();
            saveData();
            showNotification(`${item.name} به سبد خرید اضافه شد`, 'success');
        }

        // حذف محصول از سبد خرید
        function removeFromCart(itemId) {
            cart = cart.filter(item => item.id !== itemId);
            updateCart();
            saveData();
            showNotification('محصول از سبد خرید حذف شد', 'info');
        }

        // تغییر تعداد محصول در سبد خرید
        function updateQuantity(itemId, newQuantity) {
            if (newQuantity < 1) {
                removeFromCart(itemId);
                return;
            }
            
            const item = cart.find(i => i.id === itemId);
            if (item) {
                item.quantity = newQuantity;
                updateCart();
                saveData();
            }
        }

        // بهروزرسانی نمایش سبد خرید
        function updateCart() {
            // بهروزرسانی تعداد محصولات در آیکون سبد
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            // بهروزرسانی لیست محصولات در سبد
            cartItemsContainer.innerHTML = '';
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <p>سبد خرید شما خالی است</p>
                    </div>
                `;
                cartTotal.textContent = '0 افغانی';
                checkoutBtn.disabled = true;
                return;
            }
            
            checkoutBtn.disabled = false;
            let totalPrice = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                totalPrice += itemTotal;
                
                const cartItemElement = document.createElement('div');
                cartItemElement.className = 'cart-item';
                cartItemElement.innerHTML = `
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">${item.price} افغانی</div>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                    <div class="cart-item-total">${itemTotal} افغانی</div>
                    <button class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                cartItemsContainer.appendChild(cartItemElement);
            });
            
            cartTotal.textContent = `${totalPrice} افغانی`;
            orderTotal.textContent = `${totalPrice} افغانی`;
            
            // اضافه کردن ایونت به دکمههای تغییر تعداد و حذف
            document.querySelectorAll('.decrease').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = parseInt(e.target.closest('.decrease').getAttribute('data-id'));
                    const item = cart.find(i => i.id === itemId);
                    if (item) {
                        updateQuantity(itemId, item.quantity - 1);
                    }
                });
            });
            
            document.querySelectorAll('.increase').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = parseInt(e.target.closest('.increase').getAttribute('data-id'));
                    const item = cart.find(i => i.id === itemId);
                    if (item) {
                        updateQuantity(itemId, item.quantity + 1);
                    }
                });
            });
            
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', (e) => {
                    const itemId = parseInt(e.target.closest('.remove-item').getAttribute('data-id'));
                    removeFromCart(itemId);
                });
            });
        }

        // نمایش نوتیفیکیشن
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = 'notification';
            
            let icon = 'info-circle';
            if (type === 'success') icon = 'check-circle';
            if (type === 'warning') icon = 'exclamation-triangle';
            if (type === 'error') icon = 'times-circle';
            
            notification.innerHTML = `
                <div class="notification-icon">
                    <i class="fas fa-${icon}"></i>
                </div>
                <div class="notification-content">
                    <h4>اعلان سیستم</h4>
                    <p>${message}</p>
                </div>
            `;
            
            notificationPanel.appendChild(notification);
            
            // حذف نوتیفیکیشن بعد از 5 ثانیه
            setTimeout(() => {
                notification.style.opacity = '0';
                notification.style.transform = 'translateX(-100%)';
                setTimeout(() => {
                    if (notificationPanel.contains(notification)) {
                        notificationPanel.removeChild(notification);
                    }
                }, 500);
            }, 5000);
        }

        // تولید کد سفارش تصادفی
        function generateOrderCode() {
            const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const numbers = '0123456789';
            let code = 'FS-';
            
            for (let i = 0; i < 2; i++) {
                code += letters.charAt(Math.floor(Math.random() * letters.length));
            }
            
            for (let i = 0; i < 3; i++) {
                code += numbers.charAt(Math.floor(Math.random() * numbers.length));
            }
            
            return code;
        }

        // ارسال اعلان به فروشگاه
        function sendOrderToStore(orderData) {
            // ارسال نوتیفیکیشن داخلی
            showNotification(`سفارش جدید دریافت شد! کد: ${orderData.orderCode}`, 'success');
            
            // ارسال پیام به تلگرام
            sendTelegramNotification(orderData);
            
            // اضافه کردن سفارش به لیست سفارشات
            orders.unshift({
                id: orders.length + 1,
                code: orderData.orderCode,
                customer: orderData.customerName,
                items: cart.map(item => ({
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price
                })),
                total: orderData.total,
                date: new Date().toLocaleDateString('fa-IR'),
                status: 'pending',
                address: orderData.address
            });
            
            saveData();
            
            // بروزرسانی نمایش سفارشات در پنل مدیریت
            if (isAdmin) {
                displayOrdersInAdmin();
                updateDashboardStats();
            }
            
            // این بخش در حالت واقعی با API یا WebSocket به سیستم فروشگاه متصل میشود
            console.log('سفارش جدید برای فروشگاه:', orderData);
            
            // شبیهسازی ارسال به سرور
            setTimeout(() => {
                showNotification(`سفارش ${orderData.orderCode} به آشپزخانه ارسال شد`, 'success');
            }, 2000);
        }

        // مدیریت وضعیت کاربر
        function updateUserStatus() {
            if (currentUser) {
                userActions.style.display = 'none';
                userInfo.style.display = 'flex';
                userName.textContent = currentUser.name;
                userAvatar.textContent = currentUser.name.charAt(0);
                
                // بروزرسانی منوی موبایل
                mobileUserInfo.classList.add('active');
                mobileUserName.textContent = currentUser.name;
                mobileUserActions.style.display = 'none';
                mobileLoggedInActions.style.display = 'flex';
                
                // پر کردن خودکار فرم سفارش با اطلاعات کاربر
                document.getElementById('customerName').value = currentUser.name;
                document.getElementById('customerPhone').value = currentUser.phone;
            } else {
                userActions.style.display = 'flex';
                userInfo.style.display = 'none';
                
                // بروزرسانی منوی موبایل
                mobileUserInfo.classList.remove('active');
                mobileUserActions.style.display = 'flex';
                mobileLoggedInActions.style.display = 'none';
            }
            
            saveData();
        }

        // تغییر وضعیت محصول
        function toggleProductStatus(itemId) {
            const item = menuItems.find(i => i.id === itemId);
            if (item) {
                item.active = !item.active;
                displayProductsInAdmin();
                displayMenuItems();
                updateDashboardStats();
                saveData();
                showNotification(`وضعیت محصول "${item.name}" تغییر کرد`, 'success');
            }
        }

        // ویرایش محصول
        function editProduct(itemId) {
            const item = menuItems.find(i => i.id === itemId);
            if (item) {
                editingProductId = itemId;
                productModalTitle.textContent = 'ویرایش محصول';
                document.getElementById('productName').value = item.name;
                document.getElementById('productDescription').value = item.description;
                document.getElementById('productPrice').value = item.price;
                document.getElementById('productCategory').value = item.category;
                document.getElementById('productImage').value = item.image;
                document.getElementById('productBadge').value = item.badge || '';
                document.getElementById('productActive').checked = item.active;
                
                productModal.style.display = 'flex';
            }
        }

        // حذف محصول
        function deleteProduct(itemId) {
            const item = menuItems.find(i => i.id === itemId);
            if (item && confirm(`آیا از حذف محصول "${item.name}" اطمینان دارید؟`)) {
                menuItems = menuItems.filter(i => i.id !== itemId);
                displayProductsInAdmin();
                displayMenuItems();
                updateDashboardStats();
                saveData();
                showNotification(`محصول "${item.name}" حذف شد`, 'success');
            }
        }

        // افزودن محصول جدید
        function addNewProduct() {
            editingProductId = null;
            productModalTitle.textContent = 'افزودن محصول جدید';
            productForm.reset();
            document.getElementById('productActive').checked = true;
            productModal.style.display = 'flex';
        }

        // ذخیره محصول
        function saveProductHandler(e) {
            e.preventDefault();
            
            const productData = {
                name: document.getElementById('productName').value,
                description: document.getElementById('productDescription').value,
                price: parseInt(document.getElementById('productPrice').value),
                category: document.getElementById('productCategory').value,
                image: document.getElementById('productImage').value,
                badge: document.getElementById('productBadge').value || null,
                active: document.getElementById('productActive').checked
            };
            
            if (editingProductId) {
                // ویرایش محصول موجود
                const itemIndex = menuItems.findIndex(i => i.id === editingProductId);
                if (itemIndex !== -1) {
                    menuItems[itemIndex] = {
                        ...menuItems[itemIndex],
                        ...productData
                    };
                    showNotification(`محصول "${productData.name}" ویرایش شد`, 'success');
                }
            } else {
                // افزودن محصول جدید
                const newId = menuItems.length > 0 ? Math.max(...menuItems.map(i => i.id)) + 1 : 1;
                menuItems.push({
                    id: newId,
                    ...productData
                });
                showNotification(`محصول "${productData.name}" اضافه شد`, 'success');
            }
            
            displayProductsInAdmin();
            displayMenuItems();
            updateDashboardStats();
            saveData();
            productModal.style.display = 'none';
        }

        // تغییر تبهای مدیریت
        function switchAdminTab(tabName) {
            adminTabs.forEach(tab => {
                if (tab.getAttribute('data-tab') === tabName) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
            
            adminContents.forEach(content => {
                if (content.id === `${tabName}Content`) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        }

        // باز کردن منوی موبایل
        function openMobileMenu() {
            mobileNav.classList.add('active');
        }

        // بستن منوی موبایل
        function closeMobileMenuFunc() {
            mobileNav.classList.remove('active');
        }

        // ایونتها
        cartIcon.addEventListener('click', () => {
            cartModal.style.display = 'flex';
        });

        closeCart.addEventListener('click', () => {
            cartModal.style.display = 'none';
        });

        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showNotification('سبد خرید شما خالی است', 'warning');
                return;
            }
            
            cartModal.style.display = 'none';
            orderForm.style.display = 'block';
        });

        backToCart.addEventListener('click', () => {
            orderForm.style.display = 'none';
            cartModal.style.display = 'flex';
        });

        orderFormElement.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // جمعآوری اطلاعات سفارش
            const orderData = {
                orderCode: generateOrderCode(),
                customerName: document.getElementById('customerName').value,
                customerPhone: document.getElementById('customerPhone').value,
                province: document.getElementById('province').value,
                address: document.getElementById('customerAddress').value,
                notes: document.getElementById('orderNotes').value,
                items: cart,
                total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                orderTime: new Date().toLocaleString('fa-IR')
            };
            
            // ارسال اعلان به فروشگاه
            sendOrderToStore(orderData);
            
            // نمایش پیام تایید
            document.getElementById('orderCode').textContent = orderData.orderCode;
            orderForm.style.display = 'none';
            orderConfirmation.style.display = 'block';
        });

        newOrderBtn.addEventListener('click', () => {
            // ریست کردن سیستم برای سفارش جدید
            cart = [];
            updateCart();
            orderFormElement.reset();
            orderConfirmation.style.display = 'none';
            saveData();
            showNotification('میتوانید سفارش جدید خود را ثبت کنید', 'info');
        });

        // فیلتر کردن بر اساس دستهبندی
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentCategory = button.getAttribute('data-category');
                displayMenuItems();
                
                // اسکرول به بخش منو
                document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
            });
        });

        // مدیریت فرم ورود
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'flex';
            switchLoginTab('login');
        });

        registerBtn.addEventListener('click', () => {
            loginModal.style.display = 'flex';
            switchLoginTab('register');
        });

        closeLogin.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });

        // تغییر تبهای فرم ورود
        function switchLoginTab(tabName) {
            loginTabs.forEach(tab => {
                if (tab.getAttribute('data-tab') === tabName) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
            
            if (tabName === 'login') {
                loginForm.classList.add('active');
                registerForm.classList.remove('active');
            } else {
                loginForm.classList.remove('active');
                registerForm.classList.add('active');
            }
        }

        loginTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                switchLoginTab(tab.getAttribute('data-tab'));
            });
        });

        // مدیریت فرم ورود
        loginFormElement.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // بررسی اطلاعات ورود ادمین
            if (email === 'admin@gmail.com' && password === 'admin123') {
                currentUser = {
                    name: 'مدیر سیستم',
                    email: email,
                    phone: '0700000000'
                };
                isAdmin = true;
                updateUserStatus();
                loginModal.style.display = 'none';
                showNotification('با موفقیت به عنوان مدیر وارد شدید!', 'success');
                loginFormElement.reset();
                return;
            }
            
            // شبیهسازی ورود کاربر عادی
            if (email && password) {
                currentUser = {
                    name: 'کاربر نمونه',
                    email: email,
                    phone: '0712345678'
                };
                isAdmin = false;
                updateUserStatus();
                loginModal.style.display = 'none';
                showNotification('با موفقیت وارد شدید!', 'success');
                loginFormElement.reset();
            } else {
                showNotification('لطفاً تمام فیلدها را پر کنید', 'error');
            }
        });

        // مدیریت فرم ثبت نام
        registerFormElement.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const phone = document.getElementById('registerPhone').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;
            
            if (password !== confirmPassword) {
                showNotification('رمز عبور و تکرار آن مطابقت ندارند', 'error');
                return;
            }
            
            if (name && email && phone && password) {
                currentUser = {
                    name: name,
                    email: email,
                    phone: phone
                };
                isAdmin = false;
                
                // اضافه کردن کاربر جدید به لیست کاربران
                users.push({
                    id: users.length + 1,
                    name: name,
                    email: email,
                    phone: phone,
                    joinDate: new Date().toLocaleDateString('fa-IR'),
                    ordersCount: 0
                });
                
                updateUserStatus();
                loginModal.style.display = 'none';
                showNotification('حساب کاربری با موفقیت ایجاد شد!', 'success');
                registerFormElement.reset();
                switchLoginTab('login');
                
                // بروزرسانی آمار
                updateDashboardStats();
                displayUsersInAdmin();
                saveData();
            } else {
                showNotification('لطفاً تمام فیلدها را پر کنید', 'error');
            }
        });

        // مدیریت خروج کاربر
        logoutBtn.addEventListener('click', () => {
            currentUser = null;
            isAdmin = false;
            updateUserStatus();
            adminPanel.style.display = 'none';
            showNotification('با موفقیت خارج شدید', 'info');
        });

        // باز کردن پنل مدیریت
        adminBtn.addEventListener('click', () => {
            if (!currentUser) {
                showNotification('لطفاً ابتدا وارد شوید', 'warning');
                return;
            }
            
            if (!isAdmin) {
                showNotification('شما دسترسی ادمین ندارید', 'error');
                return;
            }
            
            adminPanel.style.display = 'block';
            displayOrdersInAdmin();
            displayProductsInAdmin();
            displayUsersInAdmin();
            updateDashboardStats();
        });

        userAdminBtn.addEventListener('click', () => {
            if (!isAdmin) {
                showNotification('شما دسترسی ادمین ندارید', 'error');
                return;
            }
            
            adminPanel.style.display = 'block';
            displayOrdersInAdmin();
            displayProductsInAdmin();
            displayUsersInAdmin();
            updateDashboardStats();
        });

        // بستن پنل مدیریت
        closeAdmin.addEventListener('click', () => {
            adminPanel.style.display = 'none';
        });

        // تغییر تبهای مدیریت
        adminTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                switchAdminTab(tab.getAttribute('data-tab'));
            });
        });

        // افزودن محصول جدید
        addProductBtn.addEventListener('click', addNewProduct);

        // مدیریت مودال محصولات
        closeProduct.addEventListener('click', () => {
            productModal.style.display = 'none';
        });

        cancelProduct.addEventListener('click', () => {
            productModal.style.display = 'none';
        });

        productForm.addEventListener('submit', saveProductHandler);

        // مدیریت منوی موبایل
        mobileMenuBtn.addEventListener('click', openMobileMenu);
        closeMobileMenu.addEventListener('click', closeMobileMenuFunc);

        // مدیریت ورود از طریق منوی موبایل
        mobileLoginBtn.addEventListener('click', () => {
            loginModal.style.display = 'flex';
            switchLoginTab('login');
            closeMobileMenuFunc();
        });

        mobileRegisterBtn.addEventListener('click', () => {
            loginModal.style.display = 'flex';
            switchLoginTab('register');
            closeMobileMenuFunc();
        });

        mobileAdminBtn.addEventListener('click', () => {
            if (!currentUser) {
                showNotification('لطفاً ابتدا وارد شوید', 'warning');
                closeMobileMenuFunc();
                return;
            }
            
            if (!isAdmin) {
                showNotification('شما دسترسی ادمین ندارید', 'error');
                closeMobileMenuFunc();
                return;
            }
            
            adminPanel.style.display = 'block';
            displayOrdersInAdmin();
            displayProductsInAdmin();
            displayUsersInAdmin();
            updateDashboardStats();
            closeMobileMenuFunc();
        });

        mobileUserAdminBtn.addEventListener('click', () => {
            if (!isAdmin) {
                showNotification('شما دسترسی ادمین ندارید', 'error');
                closeMobileMenuFunc();
                return;
            }
            
            adminPanel.style.display = 'block';
            displayOrdersInAdmin();
            displayProductsInAdmin();
            displayUsersInAdmin();
            updateDashboardStats();
            closeMobileMenuFunc();
        });

        mobileLogoutBtn.addEventListener('click', () => {
            currentUser = null;
            isAdmin = false;
            updateUserStatus();
            adminPanel.style.display = 'none';
            showNotification('با موفقیت خارج شدید', 'info');
            closeMobileMenuFunc();
        });

        // بستن مودال با کلیک خارج از آن
        window.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.style.display = 'none';
            }
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
            }
            if (e.target === mobileNav) {
                closeMobileMenuFunc();
            }
            if (e.target === productModal) {
                productModal.style.display = 'none';
            }
        });

        // مقداردهی اولیه
        displayMenuItems();
        updateCart();
        updateUserStatus();
        updateDashboardStats();
        displayUsersInAdmin();
        
        // نمایش پیام خوشامدگویی
        setTimeout(() => {
            showNotification('به سیستم سفارش آنلاین فست فود خوش آمدید!', 'success');
        }, 1000);