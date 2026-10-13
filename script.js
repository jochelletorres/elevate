/* =====================================================
   ELEVATE MEDIA CO.
   COMPLETE BOOKING + AI QUOTE SYSTEM
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const aiCard =
        document.getElementById("aiCard");

    const heroBook =
        document.getElementById("heroBook");

    const navBook =
        document.getElementById("navBook");

    const quoteModal =
        document.getElementById("quoteModal");

    const modalClose =
        document.getElementById("modalClose");

    const quoteForm =
        document.getElementById("quoteForm");

    const quoteResult =
        document.getElementById("quoteResult");

    const bookingForm =
        document.getElementById("bookingForm");

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");


    /* =====================================================
       PORTFOLIO FILTER
    ===================================================== */

    const portfolioFilters =
        document.querySelectorAll(".portfolio-filter");

    const portfolioItems =
        document.querySelectorAll(".portfolio-item");


    portfolioFilters.forEach(function (filter) {

        filter.addEventListener("click", function () {

            portfolioFilters.forEach(function (button) {

                button.classList.remove("active");

            });


            filter.classList.add("active");


            const selectedCategory =
                filter.dataset.filter;


            portfolioItems.forEach(function (item) {

                const category =
                    item.dataset.category;


                if (
                    selectedCategory === "all" ||
                    selectedCategory === category
                ) {

                    item.style.display = "block";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });


    /* =====================================================
       MOBILE BURGER MENU
    ===================================================== */

    if (menuToggle && navLinks) {

        menuToggle.addEventListener(
            "click",
            function (event) {

                event.preventDefault();
                event.stopPropagation();


                const opened =
                    navLinks.classList.toggle("active");


                menuToggle.classList.toggle(
                    "active",
                    opened
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    opened ? "true" : "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    opened
                        ? "Close navigation"
                        : "Open navigation"
                );

            }
        );


        navLinks.querySelectorAll("a").forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navLinks.classList.remove(
                            "active"
                        );


                        menuToggle.classList.remove(
                            "active"
                        );


                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );


                        menuToggle.setAttribute(
                            "aria-label",
                            "Open navigation"
                        );

                    }
                );

            }
        );

    }


    /* =====================================================
       HELPER
    ===================================================== */

    function getValue(id) {

        const element =
            document.getElementById(id);


        if (!element) {
            return "";
        }


        return String(
            element.value ?? ""
        ).trim();

    }


    function setField(id, value) {

        const field =
            document.getElementById(id);


        if (!field) {
            return;
        }


        field.value =
            value ?? "";

    }


    function escapeHTML(value) {

        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    function formatDate(dateString) {

        if (!dateString) {
            return "Not specified";
        }


        const date =
            new Date(
                dateString + "T00:00:00"
            );


        if (isNaN(date.getTime())) {
            return "Not specified";
        }


        return date.toLocaleDateString(
            "en-US",
            {
                month: "long",
                day: "numeric",
                year: "numeric"
            }
        );

    }


    /* =====================================================
       OPEN AI QUOTE MODAL
    ===================================================== */

    function openQuoteModal() {

        if (!quoteModal) {
            return;
        }


        quoteModal.classList.add("active");


        document.body.style.overflow =
            "hidden";

    }


    if (aiCard) {

        aiCard.addEventListener(
            "click",
            openQuoteModal
        );

    }


    /* =====================================================
       CLOSE AI QUOTE MODAL
    ===================================================== */

    function closeQuoteModal() {

        if (!quoteModal) {
            return;
        }


        quoteModal.classList.remove(
            "active"
        );


        document.body.style.overflow =
            "";

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeQuoteModal
        );

    }


    if (quoteModal) {

        quoteModal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === quoteModal
                ) {

                    closeQuoteModal();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeQuoteModal();

            }

        }
    );


    /* =====================================================
       SCROLL TO BOOKING
    ===================================================== */

    function scrollToBooking() {

        const booking =
            document.getElementById(
                "booking"
            );


        if (!booking) {
            return;
        }


        booking.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    if (heroBook) {

        heroBook.addEventListener(
            "click",
            scrollToBooking
        );

    }


    if (navBook) {

        navBook.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                if (navLinks) {

                    navLinks.classList.remove(
                        "active"
                    );

                }


                if (menuToggle) {

                    menuToggle.classList.remove(
                        "active"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );


                    menuToggle.setAttribute(
                        "aria-label",
                        "Open navigation"
                    );

                }


                scrollToBooking();

            }
        );

    }


    /* =====================================================
       NAVBAR ACTIVE LINK
       CLICK + SCROLL
    ===================================================== */

    const navItems =
        document.querySelectorAll(
            '.nav-links a[href^="#"]'
        );


    const navSections =
        document.querySelectorAll(
            'section[id], header[id], div[id]'
        );


    function setActiveNav(id) {

        if (!navItems.length) {
            return;
        }


        navItems.forEach(function (link) {

            link.classList.remove("active");

        });


        if (!id) {
            return;
        }


        const activeLink =
            document.querySelector(
                `.nav-links a[href="#${CSS.escape(id)}"]`
            );


        if (activeLink) {

            activeLink.classList.add("active");

        }

    }


    /* =====================================================
       NAVBAR CLICK
    ===================================================== */

    navItems.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                const target =
                    this.getAttribute("href");


                if (
                    !target ||
                    target === "#"
                ) {

                    return;

                }


                const sectionId =
                    target.substring(1);


                setActiveNav(
                    sectionId
                );

            }
        );

    });


    /* =====================================================
       NAVBAR SCROLL DETECTION
    ===================================================== */

    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(

                function (entries) {

                    let visibleSection =
                        null;

                    let closestDistance =
                        Infinity;


                    entries.forEach(
                        function (entry) {

                            if (
                                !entry.isIntersecting
                            ) {

                                return;

                            }


                            const rect =
                                entry.boundingClientRect;


                            const distance =
                                Math.abs(
                                    rect.top - 100
                                );


                            if (
                                distance <
                                closestDistance
                            ) {

                                closestDistance =
                                    distance;

                                visibleSection =
                                    entry.target;

                            }

                        }
                    );


                    if (visibleSection) {

                        setActiveNav(
                            visibleSection.id
                        );

                    }

                },

                {
                    rootMargin:
                        "-90px 0px -55% 0px",

                    threshold: [
                        0.1,
                        0.25,
                        0.5,
                        0.75
                    ]

                }

            );


        navSections.forEach(
            function (section) {

                if (section.id) {

                    observer.observe(
                        section
                    );

                }

            }
        );

    }


    /* =====================================================
       DEFAULT ACTIVE NAV
    ===================================================== */

    if (window.location.hash) {

        const id =
            window.location.hash.substring(1);


        setActiveNav(id);

    } else {

        setActiveNav("home");

    }


    /* =====================================================
       DURATION
    ===================================================== */

    function getHours(value) {

        if (!value) {
            return 0;
        }


        const normalized =
            String(value)
                .trim()
                .toLowerCase();


        if (
            normalized === "full day"
        ) {

            return 10;

        }


        const parsed =
            parseFloat(normalized);


        return isNaN(parsed)
            ? 0
            : parsed;

    }


    /* =====================================================
       NORMALIZE COVERAGE
    ===================================================== */

    function normalizeCoverage(value) {

        if (!value) {
            return "";
        }


        const coverage =
            String(value).trim();


        if (
            coverage === "Photo" ||
            coverage === "Photography"
        ) {

            return "Photography";

        }


        if (
            coverage === "Video" ||
            coverage === "Videography"
        ) {

            return "Videography";

        }


        if (
            coverage === "Photo + Video" ||
            coverage ===
            "Photography & Videography"
        ) {

            return "Photography & Videography";

        }


        return coverage;

    }


    /* =====================================================
       NORMALIZE ADDITIONAL SERVICES
    ===================================================== */

    function normalizeAdditionalService(value) {

        if (!value) {
            return "None";
        }


        const service =
            String(value).trim();


        if (
            service === "Same Day Edit" ||
            service === "Same-Day Edit"
        ) {

            return "Same-Day Edit";

        }


        if (
            service === "Drone"
        ) {

            return "Drone Coverage";

        }


        if (
            service === "Same Day Edit + Drone" ||
            service === "Same-Day Edit + Drone"
        ) {

            return "Same-Day Edit + Drone Coverage";

        }


        return service;

    }


    /* =====================================================
       CALCULATE PRICE
    ===================================================== */

    function calculatePrice(
        coverage,
        duration,
        guests,
        additional
    ) {

        let price = 0;


        const normalizedCoverage =
            normalizeCoverage(
                coverage
            );


        const normalizedAdditional =
            normalizeAdditionalService(
                additional
            );


        /* COVERAGE */

        if (
            normalizedCoverage ===
            "Photography"
        ) {

            price = 8000;

        }

        else if (
            normalizedCoverage ===
            "Videography"
        ) {

            price = 10000;

        }

        else if (
            normalizedCoverage ===
            "Photography & Videography"
        ) {

            price = 15000;

        }

        else {

            price = 8000;

        }


        /* DURATION */

        if (duration > 5) {

            price +=
                (duration - 5) *
                1500;

        }


        /* GUESTS */

        if (guests > 100) {

            price +=
                Math.ceil(
                    (guests - 100) / 50
                ) * 1000;

        }


        /* ADDITIONAL SERVICES */

        if (
            normalizedAdditional ===
            "Same-Day Edit"
        ) {

            price += 4000;

        }

        else if (
            normalizedAdditional ===
            "Drone Coverage"
        ) {

            price += 3000;

        }

        else if (
            normalizedAdditional ===
            "Photo Booth"
        ) {

            price += 3500;

        }

        else if (
            normalizedAdditional ===
            "Highlight Video"
        ) {

            price += 3000;

        }

        else if (
            normalizedAdditional ===
            "Same-Day Edit + Drone Coverage"
        ) {

            price += 6500;

        }


        /* MINIMUM */

        if (price < 5000) {

            price = 5000;

        }


        return price;

    }


    /* =====================================================
       PACKAGE NAME
    ===================================================== */

    function getPackageName(
        coverage
    ) {

        const normalized =
            normalizeCoverage(
                coverage
            );


        if (
            normalized ===
            "Photography"
        ) {

            return "PHOTOGRAPHY PACKAGE";

        }


        if (
            normalized ===
            "Videography"
        ) {

            return "VIDEOGRAPHY PACKAGE";

        }


        if (
            normalized ===
            "Photography & Videography"
        ) {

            return "PHOTO + VIDEO PACKAGE";

        }


        return "STANDARD COVERAGE PACKAGE";

    }


    /* =====================================================
       CREATE BOOKING DATA
    ===================================================== */

    function createBookingData(
        data
    ) {

        const durationHours =
            getHours(
                data.duration
            );


        const calculatedPrice =
            calculatePrice(
                data.coverage,
                durationHours,
                data.guests,
                data.additional
            );


        return {

            name:
                data.name,

            email:
                data.email,

            phone:
                data.phone,

            eventType:
                data.eventType,

            eventDate:
                data.eventDate,

            eventTime:
                data.eventTime,

            location:
                data.location,

            guests:
                Number(data.guests),

            duration:
                data.duration,

            durationHours:
                durationHours,

            coverage:
                normalizeCoverage(
                    data.coverage
                ),

            additional:
                normalizeAdditionalService(
                    data.additional
                ),

            message:
                data.message ||
                "None",

            packageName:
                getPackageName(
                    data.coverage
                ),

            price:
                "₱" +
                calculatedPrice.toLocaleString(
                    "en-PH"
                )

        };

    }


    /* =====================================================
       AI QUOTE FORM
    ===================================================== */

    if (quoteForm) {

        quoteForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const data = {

                    name:
                        getValue(
                            "quoteName"
                        ),

                    email:
                        getValue(
                            "quoteEmail"
                        ),

                    phone:
                        getValue(
                            "quotePhone"
                        ),

                    eventType:
                        getValue(
                            "quoteEvent"
                        ),

                    eventDate:
                        getValue(
                            "quoteDate"
                        ),

                    eventTime:
                        getValue(
                            "quoteTime"
                        ),

                    location:
                        getValue(
                            "quoteLocation"
                        ),

                    guests:
                        parseInt(
                            getValue(
                                "quoteGuests"
                            ),
                            10
                        ) || 0,

                    duration:
                        getValue(
                            "quoteDuration"
                        ),

                    coverage:
                        getValue(
                            "quoteCoverage"
                        ),

                    additional:
                        getValue(
                            "quoteServices"
                        ),

                    message:
                        getValue(
                            "quoteMessage"
                        )

                };


                /* VALIDATION */

                if (!data.name) {

                    alert(
                        "Please enter your full name."
                    );

                    return;

                }


                if (!data.email) {

                    alert(
                        "Please enter your email address."
                    );

                    return;

                }


                if (!data.phone) {

                    alert(
                        "Please enter your phone number."
                    );

                    return;

                }


                if (!data.eventType) {

                    alert(
                        "Please select an event type."
                    );

                    return;

                }


                if (!data.eventDate) {

                    alert(
                        "Please select your event date."
                    );

                    return;

                }


                if (!data.eventTime) {

                    alert(
                        "Please select your event time."
                    );

                    return;

                }


                if (!data.location) {

                    alert(
                        "Please enter your event location."
                    );

                    return;

                }


                if (data.guests < 1) {

                    alert(
                        "Please enter the number of guests."
                    );

                    return;

                }


                if (!data.duration) {

                    alert(
                        "Please select a coverage duration."
                    );

                    return;

                }


                if (!data.coverage) {

                    alert(
                        "Please select your photo/video coverage."
                    );

                    return;

                }


                /* CREATE QUOTE */

                const bookingData =
                    createBookingData(
                        data
                    );


                window.elevateBookingData =
                    bookingData;


                /* SHOW QUOTE */

                if (!quoteResult) {
                    return;
                }


                quoteResult.innerHTML = `

                    <div class="quote-result-header">

                        <div class="quote-ai-icon">
                            ✦
                        </div>

                        <div>

                            <strong>
                                Hi ${escapeHTML(
                                    bookingData.name
                                )}! 👋
                            </strong>

                            <span>
                                Your Elevate AI estimated
                                quotation is ready.
                            </span>

                        </div>

                    </div>


                    <div class="quote-result-section">

                        <div class="quote-result-title">
                            Event Summary
                        </div>


                        <div class="quote-summary">

                            <div class="quote-summary-item">

                                <div class="quote-summary-icon">
                                    👤
                                </div>

                                <div>

                                    <small>
                                        Full Name
                                    </small>

                                    <strong>
                                        ${escapeHTML(
                                            bookingData.name
                                        )}
                                    </strong>

                                </div>

                            </div>


                            <div class="quote-summary-item">

                                <div class="quote-summary-icon">
                                    ✦
                                </div>

                                <div>

                                    <small>
                                        Event Type
                                    </small>

                                    <strong>
                                        ${escapeHTML(
                                            bookingData.eventType
                                        )}
                                    </strong>

                                </div>

                            </div>


                            <div class="quote-summary-item">

                                <div class="quote-summary-icon">
                                    👥
                                </div>

                                <div>

                                    <small>
                                        Number of Guests
                                    </small>

                                    <strong>
                                        ${bookingData.guests}
                                        Guests
                                    </strong>

                                </div>

                            </div>


                            <div class="quote-summary-item">

                                <div class="quote-summary-icon">
                                    📅
                                </div>

                                <div>

                                    <small>
                                        Event Date
                                    </small>

                                    <strong>
                                        ${formatDate(
                                            bookingData.eventDate
                                        )}
                                    </strong>

                                </div>

                            </div>


                            <div class="quote-summary-item">

                                <div class="quote-summary-icon">
                                    🕐
                                </div>

                                <div>

                                    <small>
                                        Event Time
                                    </small>

                                    <strong>
                                        ${escapeHTML(
                                            bookingData.eventTime
                                        )}
                                    </strong>

                                </div>

                            </div>


                            <div class="quote-summary-item">

                                <div class="quote-summary-icon">
                                    ⏱
                                </div>

                                <div>

                                    <small>
                                        Coverage Duration
                                    </small>

                                    <strong>
                                        ${escapeHTML(
                                            bookingData.duration
                                        )}
                                    </strong>

                                </div>

                            </div>


                            <div class="quote-summary-item">

                                <div class="quote-summary-icon">
                                    📍
                                </div>

                                <div>

                                    <small>
                                        Event Location
                                    </small>

                                    <strong>
                                        ${escapeHTML(
                                            bookingData.location
                                        )}
                                    </strong>

                                </div>

                            </div>


                            <div class="quote-summary-item">

                                <div class="quote-summary-icon">
                                    📷
                                </div>

                                <div>

                                    <small>
                                        Photo / Video Coverage
                                    </small>

                                    <strong>
                                        ${escapeHTML(
                                            bookingData.coverage
                                        )}
                                    </strong>

                                </div>

                            </div>


                            <div class="quote-summary-item">

                                <div class="quote-summary-icon">
                                    ✨
                                </div>

                                <div>

                                    <small>
                                        Additional Services
                                    </small>

                                    <strong>
                                        ${escapeHTML(
                                            bookingData.additional
                                        )}
                                    </strong>

                                </div>

                            </div>


                            <div
                                class="quote-summary-item"
                                style="grid-column:1/-1;"
                            >

                                <div class="quote-summary-icon">
                                    ✉
                                </div>

                                <div>

                                    <small>
                                        Event Details
                                    </small>

                                    <strong>
                                        ${escapeHTML(
                                            bookingData.message
                                        )}
                                    </strong>

                                </div>

                            </div>


                        </div>

                    </div>


                    <div class="quote-result-section">

                        <div class="quote-result-title">
                            Recommended Package
                        </div>


                        <div class="quote-package">

                            <div>

                                <div class="quote-package-name">
                                    ${escapeHTML(
                                        bookingData.packageName
                                    )}
                                </div>


                                <ul class="quote-package-list">

                                    <li>
                                        Event Coverage
                                        (${escapeHTML(
                                            bookingData.duration
                                        )})
                                    </li>

                                    <li>
                                        ${escapeHTML(
                                            bookingData.coverage
                                        )}
                                    </li>

                                    <li>
                                        High Resolution Files
                                    </li>

                                    <li>
                                        Professional Editing
                                    </li>

                                    <li>
                                        Online Gallery
                                    </li>

                                </ul>

                            </div>


                            <div class="quote-price">

                                <small>
                                    Estimated Price
                                </small>

                                <strong>
                                    ${escapeHTML(
                                        bookingData.price
                                    )}
                                </strong>

                            </div>

                        </div>


                        <div class="quote-note">

                            <span>ⓘ</span>

                            <span>
                                This is an estimated quotation.
                                Final price may vary depending
                                on your actual requirements
                                and conditions.
                            </span>

                        </div>


                        <button
                            type="button"
                            class="quote-book-btn"
                            id="quoteBookButton"
                        >

                            Book Now

                            <span>
                                ⟶
                            </span>

                        </button>

                    </div>

                `;


                quoteForm.style.display =
                    "none";


                quoteResult.classList.add(
                    "show"
                );


                /* AI BOOK NOW */

                const quoteBookButton =
                    document.getElementById(
                        "quoteBookButton"
                    );


                if (quoteBookButton) {

                    quoteBookButton.addEventListener(
                        "click",
                        function () {

                            fillBookingForm(
                                bookingData
                            );


                            closeQuoteModal();


                            setTimeout(
                                function () {

                                    scrollToBooking();

                                },
                                300
                            );

                        }
                    );

                }

            }
        );

    }


    /* =====================================================
       FILL NORMAL FORM FROM AI
    ===================================================== */

    function fillBookingForm(
        data
    ) {

        if (!bookingForm) {
            return;
        }


        setField(
            "fullName",
            data.name
        );


        setField(
            "email",
            data.email
        );


        setField(
            "phone",
            data.phone
        );


        setField(
            "eventType",
            data.eventType
        );


        setField(
            "eventDate",
            data.eventDate
        );


        setField(
            "eventTime",
            data.eventTime
        );


        setField(
            "eventLocation",
            data.location
        );


        setField(
            "guests",
            data.guests
        );


        setField(
            "coverageDuration",
            data.duration
        );


        setField(
            "coverage",
            data.coverage
        );


        setField(
            "additionalServices",
            data.additional
        );


        setField(
            "eventMessage",
            data.message === "None"
                ? ""
                : data.message
        );


        /* STORE AI QUOTE */

        bookingForm.dataset.package =
            data.packageName;


        bookingForm.dataset.price =
            data.price;


        bookingForm.dataset.fromAI =
            "true";


        /* TRIGGER CHANGE EVENTS */

        [
            "eventType",
            "coverageDuration",
            "coverage",
            "additionalServices"
        ].forEach(function (id) {

            const field =
                document.getElementById(id);


            if (field) {

                field.dispatchEvent(
                    new Event(
                        "change",
                        {
                            bubbles: true
                        }
                    )
                );

            }

        });

    }


    /* =====================================================
       NORMAL BOOKING FORM
    ===================================================== */

    if (bookingForm) {

        bookingForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                /* GET DATA */

                const data = {

                    name:
                        getValue(
                            "fullName"
                        ),

                    email:
                        getValue(
                            "email"
                        ),

                    phone:
                        getValue(
                            "phone"
                        ),

                    eventType:
                        getValue(
                            "eventType"
                        ),

                    eventDate:
                        getValue(
                            "eventDate"
                        ),

                    eventTime:
                        getValue(
                            "eventTime"
                        ),

                    location:
                        getValue(
                            "eventLocation"
                        ),

                    guests:
                        parseInt(
                            getValue(
                                "guests"
                            ),
                            10
                        ) || 0,

                    duration:
                        getValue(
                            "coverageDuration"
                        ),

                    coverage:
                        getValue(
                            "coverage"
                        ),

                    additional:
                        getValue(
                            "additionalServices"
                        ),

                    message:
                        getValue(
                            "eventMessage"
                        )

                };


                /* VALIDATION */

                if (!data.name) {

                    alert(
                        "Please enter your full name."
                    );

                    return;

                }


                if (!data.email) {

                    alert(
                        "Please enter your email address."
                    );

                    return;

                }


                if (!data.phone) {

                    alert(
                        "Please enter your phone number."
                    );

                    return;

                }


                if (!data.eventType) {

                    alert(
                        "Please select an event type."
                    );

                    return;

                }


                if (!data.eventDate) {

                    alert(
                        "Please select your event date."
                    );

                    return;

                }


                if (!data.eventTime) {

                    alert(
                        "Please select your event time."
                    );

                    return;

                }


                if (!data.location) {

                    alert(
                        "Please enter your event location."
                    );

                    return;

                }


                if (data.guests < 1) {

                    alert(
                        "Please enter the number of guests."
                    );

                    return;

                }


                if (!data.duration) {

                    alert(
                        "Please select a coverage duration."
                    );

                    return;

                }


                if (!data.coverage) {

                    alert(
                        "Please select your photo/video coverage."
                    );

                    return;

                }


                /* ALWAYS RECALCULATE */

                const bookingData =
                    createBookingData(
                        data
                    );


                /* BOOKING NUMBER */

                const booking = {

                    bookingNumber:
                        "EM-" +
                        Date.now()
                            .toString()
                            .slice(-6),

                    ...bookingData,

                    paymentMethod:
                        ""

                };


                /* SAVE */

                localStorage.setItem(
                    "elevateLatestBooking",
                    JSON.stringify(
                        booking
                    )
                );


                /* SHOW */

                showBookingResult(
                    booking
                );

            }
        );

    }


    /* =====================================================
       SHOW BOOKING RESULT + PAYMENT
    ===================================================== */

    function showBookingResult(
        booking
    ) {

        const oldResult =
            document.getElementById(
                "bookingResult"
            );


        if (oldResult) {
            oldResult.remove();
        }


        const result =
            document.createElement(
                "div"
            );


        result.id =
            "bookingResult";


        result.className =
            "booking-result";


        result.innerHTML = `

            <div class="booking-success">

                <div class="booking-success-icon">
                    ✓
                </div>

                <div class="eyebrow">
                    ELEVATE MEDIA CO.
                </div>

                <h2>
                    Booking Submitted!
                </h2>

                <p>
                    Thank you,
                    <strong>
                        ${escapeHTML(
                            booking.name
                        )}
                    </strong>!
                    Your event booking has been
                    successfully recorded.
                </p>

                <div class="booking-number">
                    Booking #${escapeHTML(
                        booking.bookingNumber
                    )}
                </div>

            </div>


            <div class="booking-details">

                <h3>
                    Booking Details
                </h3>


                <div class="booking-detail-grid">

                    <div class="booking-detail">

                        <small>
                            Full Name
                        </small>

                        <strong>
                            ${escapeHTML(
                                booking.name
                            )}
                        </strong>

                    </div>


                    <div class="booking-detail">

                        <small>
                            Email
                        </small>

                        <strong>
                            ${escapeHTML(
                                booking.email
                            )}
                        </strong>

                    </div>


                    <div class="booking-detail">

                        <small>
                            Phone
                        </small>

                        <strong>
                            ${escapeHTML(
                                booking.phone
                            )}
                        </strong>

                    </div>


                    <div class="booking-detail">

                        <small>
                            Event Type
                        </small>

                        <strong>
                            ${escapeHTML(
                                booking.eventType
                            )}
                        </strong>

                    </div>


                    <div class="booking-detail">

                        <small>
                            Event Date
                        </small>

                        <strong>
                            ${formatDate(
                                booking.eventDate
                            )}
                        </strong>

                    </div>


                    <div class="booking-detail">

                        <small>
                            Event Time
                        </small>

                        <strong>
                            ${escapeHTML(
                                booking.eventTime
                            )}
                        </strong>

                    </div>


                    <div class="booking-detail">

                        <small>
                            Event Location
                        </small>

                        <strong>
                            ${escapeHTML(
                                booking.location
                            )}
                        </strong>

                    </div>


                    <div class="booking-detail">

                        <small>
                            Number of Guests
                        </small>

                        <strong>
                            ${escapeHTML(
                                booking.guests
                            )}
                            Guests
                        </strong>

                    </div>


                    <div class="booking-detail">

                        <small>
                            Coverage Duration
                        </small>

                        <strong>
                            ${escapeHTML(
                                booking.duration
                            )}
                        </strong>

                    </div>


                    <div class="booking-detail">

                        <small>
                            Photo / Video Coverage
                        </small>

                        <strong>
                            ${escapeHTML(
                                booking.coverage
                            )}
                        </strong>

                    </div>


                    <div class="booking-detail">

                        <small>
                            Additional Services
                        </small>

                        <strong>
                            ${escapeHTML(
                                booking.additional
                            )}
                        </strong>

                    </div>


                    <div
                        class="booking-detail"
                        style="grid-column:1/-1;"
                    >

                        <small>
                            Event Details
                        </small>

                        <strong>
                            ${escapeHTML(
                                booking.message
                            )}
                        </strong>

                    </div>


                </div>

            </div>


            <div class="booking-total">

                <span>
                    Estimated Total
                </span>

                <strong>
                    ${escapeHTML(
                        booking.price
                    )}
                </strong>

            </div>


            <div class="payment-section">

                <div class="payment-header">

                    <div class="payment-header-icon">
                        <i class="fa-solid fa-credit-card"></i>
                    </div>

                    <div>

                        <h3>
                            Payment Method
                        </h3>

                        <p>
                            Select your preferred payment method.
                        </p>

                    </div>

                </div>


                <div class="payment-options">


                    <label class="payment-option">

                        <input
                            type="radio"
                            name="bookingPayment"
                            value="GCash"
                        >

                        <div class="payment-icon">
                            ₱
                        </div>

                        <div class="payment-option-text">

                            <strong>
                                GCash
                            </strong>

                            <small>
                                Pay using GCash
                            </small>

                        </div>

                    </label>


                    <label class="payment-option">

                        <input
                            type="radio"
                            name="bookingPayment"
                            value="Maya"
                        >

                        <div class="payment-icon">
                            ₱
                        </div>

                        <div class="payment-option-text">

                            <strong>
                                Maya
                            </strong>

                            <small>
                                Pay using Maya
                            </small>

                        </div>

                    </label>


                    <label class="payment-option">

                        <input
                            type="radio"
                            name="bookingPayment"
                            value="Bank Transfer"
                        >

                        <div class="payment-icon">
                            ⇄
                        </div>

                        <div class="payment-option-text">

                            <strong>
                                Bank Transfer
                            </strong>

                            <small>
                                Direct bank payment
                            </small>

                        </div>

                    </label>


                    <label class="payment-option">

                        <input
                            type="radio"
                            name="bookingPayment"
                            value="Credit / Debit Card"
                        >

                        <div class="payment-icon">
                            💳
                        </div>

                        <div class="payment-option-text">

                            <strong>
                                Credit / Debit Card
                            </strong>

                            <small>
                                Pay using your card
                            </small>

                        </div>

                    </label>


                    <label class="payment-option">

                        <input
                            type="radio"
                            name="bookingPayment"
                            value="Cash"
                        >

                        <div class="payment-icon">
                            ₱
                        </div>

                        <div class="payment-option-text">

                            <strong>
                                Cash
                            </strong>

                            <small>
                                Cash / on-site payment
                            </small>

                        </div>

                    </label>

                </div>


                <button
                    type="button"
                    class="confirm-payment-btn"
                    id="confirmBookingPayment"
                >

                    Confirm Payment Method

                    <span>
                        ⟶
                    </span>

                </button>


                <div
                    class="payment-message"
                    id="bookingPaymentMessage"
                ></div>

            </div>

        `;


        /* INSERT RESULT */

        if (
            bookingForm &&
            bookingForm.parentNode
        ) {

            bookingForm.parentNode.insertBefore(
                result,
                bookingForm.nextSibling
            );

        }


        /* HIDE FORM */

        if (bookingForm) {

            bookingForm.style.display =
                "none";

        }


        /* SCROLL */

        setTimeout(
            function () {

                result.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            },
            100
        );


        /* PAYMENT BUTTON */

        const paymentButton =
            document.getElementById(
                "confirmBookingPayment"
            );


        const paymentMessage =
            document.getElementById(
                "bookingPaymentMessage"
            );


        if (paymentButton) {

            paymentButton.addEventListener(
                "click",
                function () {

                    const selected =
                        document.querySelector(
                            'input[name="bookingPayment"]:checked'
                        );


                    if (!selected) {

                        if (paymentMessage) {

                            paymentMessage.innerHTML = `

                                <strong>
                                    Please select a payment
                                    method first.
                                </strong>

                            `;


                            paymentMessage.classList.add(
                                "show"
                            );

                        }

                        return;

                    }


                    const method =
                        selected.value;


                    booking.paymentMethod =
                        method;


                    /* SAVE AGAIN */

                    localStorage.setItem(
                        "elevateLatestBooking",
                        JSON.stringify(
                            booking
                        )
                    );


                    /* SUCCESS */

                    if (paymentMessage) {

                        paymentMessage.innerHTML = `

                            <strong>
                                ✓ Payment Method Saved
                            </strong>

                            <br><br>

                            Selected payment method:

                            <strong>
                                ${escapeHTML(
                                    method
                                )}
                            </strong>

                            <br><br>

                            Your booking has been recorded.
                            Our team will contact you with
                            the payment instructions and
                            final confirmation.

                        `;


                        paymentMessage.classList.add(
                            "show"
                        );

                    }


                    paymentButton.innerHTML =
                        "Payment Method Selected ✓";


                    paymentButton.disabled =
                        true;

                }
            );

        }

    }


    /* =====================================================
       QUICK CONTACT FORM
    ===================================================== */

    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    getValue(
                        "contactName"
                    );


                const email =
                    getValue(
                        "contactEmail"
                    );


                const eventType =
                    getValue(
                        "contactEvent"
                    );


                const message =
                    getValue(
                        "contactMessage"
                    );


                if (
                    !name ||
                    !email ||
                    !eventType
                ) {

                    alert(
                        "Please complete the required fields."
                    );

                    return;

                }


                alert(
                    "Thank you, " +
                    name +
                    "! Your message has been sent."
                );


                contactForm.reset();

            }
        );

    }


});