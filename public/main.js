console.log('test')

const BASE_URL = 'http://localhost:4000'
const adoptBtn = document.getElementById('adopt-btn')

function displayForm() {

    // Create the form
    const formSection = document.createElement('section');
    formSection.className = 'class="mb-32 text-center"';
    formSection.innerHTML = `
      
            <div class="mx-auto max-w-[700px] md:px-3">
                <h2 class="mb-12 text-3xl font-bold">Contact us</h2>
                <form id="adopt-form">
                <div class="relative mb-6" data-te-input-wrapper-init>
                <input type="text"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-zinc-50 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-600 dark:placeholder:text-gray-600 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="name" placeholder="Name" />
                <label
                    class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-green-700 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-green-700 dark:peer-focus:text-primary"
                    for="name">Name
                </label>
            </div>
            <div class="relative mb-6" data-te-input-wrapper-init>
                <input type="email"
                    class="peer block min-h-[auto] w-full rounded border-0 bg-zinc-50 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-600 dark:placeholder:text-gray-600 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="email" placeholder="Email address" />
                <label
                    class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-green-700 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-green-700 dark:peer-focus:text-primary"
                    for="email">Email address
                </label>
            </div>
            <div class="relative mb-6" data-te-input-wrapper-init>
                <textarea
                    class="peer block min-h-[auto] w-full rounded border-0 bg-zinc-50 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-600  dark:placeholder:text-gray-600  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="message" rows="3" placeholder="Your message"></textarea>
                <label for="message"
                    class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-green-700 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-green-700 dark:peer-focus:text-primary">Message</label>
            </div>

    </div>
                    <button type="submit" data-te-ripple-init id="submit-btn" data-te-ripple-color="light"
                        class="mb-6 inline-block w-full rounded bg-green-700 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Submit
                    </button>
                </form>
            </div>
    `;

    // Append the form to the form-container div
    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = '';
    formContainer.appendChild(formSection);

    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('submit', handleSubmit);
}


//form submit
function handleSubmit(event) {
    event.preventDefault();
    alert('it was clicked')
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create an object with the form data
    const body = {
        name,
        email,
        message,
    };

    // Make a POST request to the backend API using Axios
    axios
        .post(`${BASE_URL}/adopt`, body)
        .then((res) => {
            // Handle the response from the server if needed
            console.log(res.data);
            // For example, you can show a success message to the user
            alert('Form submitted successfully!');
        })
        .catch((error) => {
            // Handle errors if the request fails
            console.error('Error submitting form:', error);
        });
}



function adopt() {
    displayForm()
}


adoptBtn.addEventListener('click', adopt)