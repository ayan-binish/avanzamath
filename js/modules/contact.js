/**
 * Module 7: Contact Us (Página de Contacto y Asistencia)
 * Provides direct contact details (ayaanbinish@gmail.com), interactive message form,
 * email copy capability, and bilingual FAQ support.
 */

const ContactModule = {
  contactEmail: 'ayaanbinish@gmail.com',

  init() {
    this.render();
  },

  render() {
    const container = document.getElementById('contact-view');
    if (!container) return;

    container.innerHTML = `
      <!-- Contact Hero Banner -->
      <div class="contact-hero-card animate-fade-in">
        <div class="contact-hero-icon">📬</div>
        <div class="contact-hero-content">
          <span class="welcome-hero-badge">💬 ${t('tabContact')}</span>
          <h2 class="contact-hero-title">${t('contactTitle')}</h2>
          <p class="contact-hero-subtitle">${t('contactSubtitle')}</p>
        </div>
      </div>

      <div class="contact-grid mt-4">
        <!-- Direct Email Card -->
        <div class="contact-card direct-email-card animate-pop">
          <div class="contact-card-header">
            <div class="contact-icon-bubble">✉️</div>
            <div>
              <h3 class="contact-card-title">${t('contactEmailHeader')}</h3>
              <p class="contact-card-desc">${t('contactEmailDesc')}</p>
            </div>
          </div>

          <div class="email-address-box mt-3">
            <span class="email-icon">📧</span>
            <span class="email-text" id="contact-email-val">${this.contactEmail}</span>
          </div>

          <div class="contact-actions mt-3">
            <button class="btn btn-primary" onclick="ContactModule.copyEmail()">
              ${t('copyEmailBtn')}
            </button>
            <a href="mailto:${this.contactEmail}" class="btn btn-secondary" style="text-decoration:none;">
              ${t('sendEmailBtn')}
            </a>
          </div>

          <div id="contact-copy-feedback" class="contact-feedback hidden"></div>
        </div>

        <!-- Interactive Contact Form Card -->
        <div class="contact-card form-card animate-pop" style="animation-delay: 80ms;">
          <h3 class="contact-card-title mb-2">📝 ${t('formCardTitle')}</h3>
          
          <form id="contact-message-form" onsubmit="ContactModule.handleFormSubmit(event)">
            <div class="form-group mb-3">
              <label class="form-label" for="contact-name">${t('formNameLabel')}</label>
              <input type="text" id="contact-name" class="form-input" required placeholder="Mateo / María" />
            </div>

            <div class="form-group mb-3">
              <label class="form-label" for="contact-email">${t('formEmailLabel')}</label>
              <input type="email" id="contact-email" class="form-input" required placeholder="ejemplo@correo.com" />
            </div>

            <div class="form-group mb-3">
              <label class="form-label" for="contact-subject">${t('formSubjectLabel')}</label>
              <select id="contact-subject" class="form-input form-select">
                <option value="General Inquiry">${t('formSubjectOption1')}</option>
                <option value="School Partnership">${t('formSubjectOption2')}</option>
                <option value="Feature Suggestion">${t('formSubjectOption3')}</option>
                <option value="Bug Report">${t('formSubjectOption4')}</option>
              </select>
            </div>

            <div class="form-group mb-3">
              <label class="form-label" for="contact-message">${t('formMessageLabel')}</label>
              <textarea id="contact-message" class="form-input form-textarea" rows="4" required placeholder="${t('formMessagePlaceholder')}"></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-block">
              ${t('sendMessageBtn')}
            </button>
          </form>

          <div id="contact-form-feedback" class="contact-feedback hidden mt-3"></div>
        </div>
      </div>

      <!-- Support & FAQ Section -->
      <section class="contact-faq-section mt-5 animate-fade-in">
        <div class="section-heading-bar">
          <div>
            <h3 class="section-title">❓ ${t('faqTitle')}</h3>
          </div>
        </div>

        <div class="faq-grid mt-3">
          <div class="faq-card animate-pop" style="animation-delay: 120ms;">
            <h4 class="faq-question">💡 ${t('faq1Q')}</h4>
            <p class="faq-answer">${t('faq1A')}</p>
          </div>

          <div class="faq-card animate-pop" style="animation-delay: 160ms;">
            <h4 class="faq-question">📊 ${t('faq2Q')}</h4>
            <p class="faq-answer">${t('faq2A')}</p>
          </div>

          <div class="faq-card animate-pop" style="animation-delay: 200ms;">
            <h4 class="faq-question">🪅 ${t('faq3Q')}</h4>
            <p class="faq-answer">${t('faq3A')}</p>
          </div>
        </div>
      </section>
    `;
  },

  copyEmail() {
    const feedbackEl = document.getElementById('contact-copy-feedback');
    const emailStr = this.contactEmail;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(emailStr).then(() => {
        this.showFeedback(feedbackEl, t('emailCopiedToast'), true);
      }).catch(() => {
        this.fallbackCopy(emailStr, feedbackEl);
      });
    } else {
      this.fallbackCopy(emailStr, feedbackEl);
    }
  },

  fallbackCopy(text, feedbackEl) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      this.showFeedback(feedbackEl, t('emailCopiedToast'), true);
    } catch (err) {
      this.showFeedback(feedbackEl, `Email: ${text}`, true);
    }
    document.body.removeChild(tempInput);
  },

  handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name')?.value.trim() || '';
    const email = document.getElementById('contact-email')?.value.trim() || '';
    const subject = document.getElementById('contact-subject')?.value || 'Inquiry';
    const message = document.getElementById('contact-message')?.value.trim() || '';

    const feedbackEl = document.getElementById('contact-form-feedback');

    if (!name || !email || !message) return;

    // Show success feedback message
    const msgToast = t('formSuccessToast', { email });
    this.showFeedback(feedbackEl, msgToast, true);

    // Also trigger mailto with prefilled values
    const mailtoSubject = encodeURIComponent(`[AvanzaMath Contact] ${subject}`);
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    setTimeout(() => {
      window.location.href = `mailto:${this.contactEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 1200);

    // Reset form
    const form = document.getElementById('contact-message-form');
    if (form) form.reset();
  },

  showFeedback(element, message, success = true) {
    if (!element) return;
    element.className = `contact-feedback animate-pop ${success ? 'feedback-success-toast' : 'feedback-error-toast'}`;
    element.innerHTML = message;
    element.classList.remove('hidden');

    setTimeout(() => {
      element.classList.add('hidden');
    }, 6000);
  }
};

window.ContactModule = ContactModule;
