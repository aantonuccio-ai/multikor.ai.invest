// Password Protection
const INVESTOR_PASSWORD = '#MRiFNZk4Z'; // Change this to your preferred password

function checkPassword() {
    const input = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('errorMessage');

    if (input.value === INVESTOR_PASSWORD) {
        document.getElementById('passwordOverlay').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
        sessionStorage.setItem('multikor_access', 'granted');
    } else {
        errorMessage.textContent = 'Invalid access code. Please try again.';
        input.value = '';
        input.focus();
    }
}

// Check if user already has access
window.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem('multikor_access') === 'granted') {
        document.getElementById('passwordOverlay').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
    }

    // Allow Enter key to submit password
    document.getElementById('passwordInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });

    // Initialize calculators
    calculateSupport();
    calculateFinance();
    calculateProcurement();

    // Initialize charts
    initCharts();
});

// Tab Switching
function switchTab(tabName) {
    // Hide all calculator contents
    document.querySelectorAll('.calculator-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected content and activate tab
    document.getElementById(`${tabName}-calc`).classList.add('active');
    event.target.classList.add('active');
}

// Support Calculator
function calculateSupport() {
    const tickets = parseFloat(document.getElementById('support-tickets').value) || 0;
    const costPerTicket = parseFloat(document.getElementById('support-cost').value) || 0;
    const automationRate = parseFloat(document.getElementById('support-automation').value) || 0;

    const annualCost = tickets * costPerTicket;
    const savings = annualCost * (automationRate / 100);
    const multikorACV = savings * 0.08;
    const customerNetBenefit = savings - multikorACV;
    const roi = multikorACV > 0 ? (customerNetBenefit / multikorACV) : 0;

    const resultsHTML = `
        <div class="result-row">
            <span class="result-label">Current Annual Support Cost</span>
            <span class="result-value">${formatCurrency(annualCost)}</span>
        </div>
        <div class="result-row">
            <span class="result-label">Annual Savings (${automationRate}% automation)</span>
            <span class="result-value">${formatCurrency(savings)}</span>
        </div>
        <div class="result-row">
            <span class="result-label">Multikor Annual Contract Value (8%)</span>
            <span class="result-value highlight">${formatCurrency(multikorACV)}</span>
        </div>
        <div class="result-row">
            <span class="result-label">Customer Net Benefit</span>
            <span class="result-value">${formatCurrency(customerNetBenefit)}</span>
        </div>
        <div class="result-row roi">
            <span class="result-label"><strong>Customer ROI</strong></span>
            <span class="result-value highlight">${roi.toFixed(1)}x</span>
        </div>
    `;

    document.getElementById('support-results').innerHTML = resultsHTML;
}

// Finance Calculator
function calculateFinance() {
    const invoices = parseFloat(document.getElementById('finance-invoices').value) || 0;
    const costPerInvoice = parseFloat(document.getElementById('finance-cost').value) || 0;
    const staff = parseFloat(document.getElementById('finance-staff').value) || 0;
    const fteCost = parseFloat(document.getElementById('finance-fte-cost').value) || 0;
    const automationRate = parseFloat(document.getElementById('finance-automation').value) || 0;

    const invoiceCost = invoices * costPerInvoice;
    const staffCost = staff * fteCost;
    const totalCost = invoiceCost + staffCost;
    const savings = totalCost * (automationRate / 100);
    const multikorACV = savings * 0.08;
    const customerNetBenefit = savings - multikorACV;
    const roi = multikorACV > 0 ? (customerNetBenefit / multikorACV) : 0;

    const resultsHTML = `
        <div class="result-row">
            <span class="result-label">Invoice Processing Cost</span>
            <span class="result-value">${formatCurrency(invoiceCost)}</span>
        </div>
        <div class="result-row">
            <span class="result-label">AP Staff Cost</span>
            <span class="result-value">${formatCurrency(staffCost)}</span>
        </div>
        <div class="result-row">
            <span class="result-label">Total Annual AP Cost</span>
            <span class="result-value">${formatCurrency(totalCost)}</span>
        </div>
        <div class="result-row">
            <span class="result-label">Annual Savings (${automationRate}% reduction)</span>
            <span class="result-value">${formatCurrency(savings)}</span>
        </div>
        <div class="result-row">
            <span class="result-label">Multikor Annual Contract Value (8%)</span>
            <span class="result-value highlight">${formatCurrency(multikorACV)}</span>
        </div>
        <div class="result-row">
            <span class="result-label">Customer Net Benefit</span>
            <span class="result-value">${formatCurrency(customerNetBenefit)}</span>
        </div>
        <div class="result-row roi">
            <span class="result-label"><strong>Customer ROI</strong></span>
            <span class="result-value highlight">${roi.toFixed(1)}x</span>
        </div>
    `;

    document.getElementById('finance-results').innerHTML = resultsHTML;
}

// Procurement Calculator
function calculateProcurement() {
    const spend = parseFloat(document.getElementById('procurement-spend').value) || 0;
    const optimizationRate = parseFloat(document.getElementById('procurement-optimization').value) || 0;

    const spendDollars = spend * 1000000; // Convert millions to dollars
    const savings = spendDollars * (optimizationRate / 100);
    const multikorACV = savings * 0.08;
    const customerNetBenefit = savings - multikorACV;
    const roi = multikorACV > 0 ? (customerNetBenefit / multikorACV) : 0;

    const resultsHTML = `
        <div class="result-row">
            <span class="result-label">Annual Procurement Spend</span>
            <span class="result-value">${formatCurrency(spendDollars)}</span>
        </div>
        <div class="result-row">
            <span class="result-label">AI-Driven Spend Optimization (${optimizationRate}%)</span>
            <span class="result-value">${formatCurrency(savings)}</span>
        </div>
        <div class="result-row">
            <span class="result-label">Multikor Annual Contract Value (8%)</span>
            <span class="result-value highlight">${formatCurrency(multikorACV)}</span>
        </div>
        <div class="result-row">
            <span class="result-label">Customer Net Benefit</span>
            <span class="result-value">${formatCurrency(customerNetBenefit)}</span>
        </div>
        <div class="result-row roi">
            <span class="result-label"><strong>Customer ROI</strong></span>
            <span class="result-value highlight">${roi.toFixed(1)}x</span>
        </div>
    `;

    document.getElementById('procurement-results').innerHTML = resultsHTML;
}

// Helper function to format currency
function formatCurrency(value) {
    if (value >= 1000000) {
        return '$' + (value / 1000000).toFixed(2) + 'M';
    } else if (value >= 1000) {
        return '$' + (value / 1000).toFixed(0) + 'K';
    } else {
        return '$' + value.toFixed(0);
    }
}

// Initialize Charts
function initCharts() {
    // Revenue Growth Chart
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCtx, {
        type: 'bar',
        data: {
            labels: ['Year 1 (2026)', 'Year 2 (2027)', 'Year 3 (2028)'],
            datasets: [
                {
                    label: 'Customer Support',
                    data: [3.55, 8.26, 15.7],
                    backgroundColor: 'rgba(102, 126, 234, 0.8)',
                    borderColor: 'rgba(102, 126, 234, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Finance Operations',
                    data: [0.75, 2.18, 4.29],
                    backgroundColor: 'rgba(124, 58, 237, 0.8)',
                    borderColor: 'rgba(124, 58, 237, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Procurement',
                    data: [4.0, 32.0, 64.0],
                    backgroundColor: 'rgba(16, 185, 129, 0.8)',
                    borderColor: 'rgba(16, 185, 129, 1)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#cbd5e1',
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#cbd5e1',
                    borderColor: '#334155',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': $' + context.parsed.y + 'M';
                        }
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        color: 'rgba(51, 65, 85, 0.3)'
                    },
                    ticks: {
                        color: '#cbd5e1',
                        font: {
                            size: 12
                        }
                    }
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(51, 65, 85, 0.3)'
                    },
                    ticks: {
                        color: '#cbd5e1',
                        font: {
                            size: 12
                        },
                        callback: function(value) {
                            return '$' + value + 'M';
                        }
                    }
                }
            }
        }
    });

    // Customer Acquisition Chart
    const customerCtx = document.getElementById('customerChart').getContext('2d');
    new Chart(customerCtx, {
        type: 'line',
        data: {
            labels: ['Year 1 (2026)', 'Year 2 (2027)', 'Year 3 (2028)'],
            datasets: [
                {
                    label: 'Total Customers',
                    data: [10, 25, 34],
                    borderColor: 'rgba(102, 126, 234, 1)',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    pointBackgroundColor: 'rgba(102, 126, 234, 1)',
                    pointBorderColor: '#f1f5f9',
                    pointBorderWidth: 2
                },
                {
                    label: 'Average ACV',
                    data: [0.83, 1.7, 2.5],
                    borderColor: 'rgba(16, 185, 129, 1)',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    pointBackgroundColor: 'rgba(16, 185, 129, 1)',
                    pointBorderColor: '#f1f5f9',
                    pointBorderWidth: 2,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: '#cbd5e1',
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#cbd5e1',
                    borderColor: '#334155',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            if (context.dataset.label === 'Total Customers') {
                                return context.dataset.label + ': ' + context.parsed.y;
                            } else {
                                return context.dataset.label + ': $' + context.parsed.y + 'M';
                            }
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(51, 65, 85, 0.3)'
                    },
                    ticks: {
                        color: '#cbd5e1',
                        font: {
                            size: 12
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    position: 'left',
                    grid: {
                        color: 'rgba(51, 65, 85, 0.3)'
                    },
                    ticks: {
                        color: '#cbd5e1',
                        font: {
                            size: 12
                        },
                        callback: function(value) {
                            return value + ' customers';
                        }
                    }
                },
                y1: {
                    beginAtZero: true,
                    position: 'right',
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#cbd5e1',
                        font: {
                            size: 12
                        },
                        callback: function(value) {
                            return '$' + value + 'M';
                        }
                    }
                }
            }
        }
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.value-card, .segment-card, .metric-card, .competitive-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

